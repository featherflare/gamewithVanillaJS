import { Monster, Sprite } from './classes'
import { attacks } from './attacks'
import battleBackground from '../../images/pokemon/battleBackground.png'
import { monster } from './monsters'
import { animate, battle } from '../pokemon'
import { audio } from './audio'

const battleBackGroundImage = new Image()
battleBackGroundImage.src = battleBackground
const battleBG = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  image: battleBackGroundImage,
})

let draggle = new Monster(monster.Draggle)
let emby = new Monster(monster.Emby)
let renderedSprites = [draggle, emby]
let battleAnimationId
let queue

export function initBattle() {
  document.querySelector('#userInterface').style.display = 'block'
  document.querySelector('#dialogueBox').style.display = 'none'
  document.querySelector('#enemyHealthBar').style.width = '100%'
  document.querySelector('#playerHealthBar').style.width = '100%'
  document.querySelector('#attackBox').replaceChildren()

  draggle = new Monster(monster.Draggle)
  emby = new Monster(monster.Emby)
  renderedSprites = [draggle, emby]
  queue = []

  emby.attacks.forEach((attack) => {
    const button = document.createElement('button')
    button.innerHTML = attack.name
    document.querySelector('#attackBox').append(button)
  })

  // Our event listener for our buttons (attack)
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      emby.attack({
        attack: selectedAttack,
        recipient: draggle,
        renderedSprites,
      })

      if (draggle.health <= 0) {
        queue.push(() => {
          draggle.faint()
        })
        queue.push(() => {
          // fade back to black
          gsap.to('#overlappingDiv', {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId)
              animate()
              document.querySelector('#userInterface').style.display = 'none'
              gsap.to('#overlappingDiv', {
                opacity: 0,
              })

              battle.initiated = false
              audio.Map.play()
            },
          })
        })
      }

      // draggle or enemy attack right here
      const randomAttack =
        draggle.attacks[Math.floor(Math.random() * draggle.attacks.length)]

      queue.push(() => {
        draggle.attack({
          attack: randomAttack,
          recipient: emby,
          renderedSprites,
        })

        if (emby.health <= 0) {
          queue.push(() => {
            emby.faint()
          })

          queue.push(() => {
            // fade back to black
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete: () => {
                cancelAnimationFrame(battleAnimationId)
                animate()
                document.querySelector('#userInterface').style.display = 'none'
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                })

                battle.initiated = false
                audio.Map.play()
              },
            })
          })
        }
      })
    })

    button.addEventListener('mouseenter', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      document.querySelector('#attackType').innerHTML = selectedAttack.type
      document.querySelector('#attackType').style.color = selectedAttack.color
    })
  })
}

export function animateBattle() {
  battleAnimationId = requestAnimationFrame(animateBattle)
  battleBG.draw()

  renderedSprites.forEach((sprite) => {
    sprite.draw()
  })
}

document.querySelector('#dialogueBox').addEventListener('click', (e) => {
  if (queue.length > 0) {
    queue[0]()
    queue.shift()
  } else e.currentTarget.style.display = 'none'
})
