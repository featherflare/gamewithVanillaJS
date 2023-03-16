import fireballImg from '../../images/pokemon/fireball.png'
import { audio } from './audio'
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

export class Sprite {
  constructor({
    position,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    rotation = 0,
  }) {
    this.position = position
    this.image = new Image()
    this.frames = { ...frames, val: 0, elapsed: 0 }
    this.image.src = image.src
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max
      this.height = this.image.height
    }

    this.animate = animate
    this.sprites = sprites
    this.opacity = 1
    this.rotation = rotation
  }
  draw() {
    c.save()
    c.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    )
    c.rotate(this.rotation)
    c.globalAlpha = this.opacity
    c.translate(
      -(this.position.x + this.width / 2),
      -(this.position.y + this.height / 2)
    )
    c.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    )
    c.restore()

    if (!this.animate) return

    if (this.frames.max > 1) {
      this.frames.elapsed++
    }
    if (this.frames.elapsed % this.frames.hold === 0) {
      if (this.frames.val < this.frames.max - 1) this.frames.val++
      else this.frames.val = 0
    }
  }
}

export class Monster extends Sprite {
  constructor({
    position,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    rotation = 0,
    isEnemy = false,
    name,
    attacks,
  }) {
    super({
      position,
      image,
      frames,
      sprites,
      animate,
      rotation,
    })
    this.health = 100
    this.isEnemy = isEnemy
    this.name = name
    this.attacks = attacks
  }

  faint() {
    const dialogue = document.querySelector('#dialogueBox')
    dialogue.innerHTML = this.name + ' fainted!'
    gsap.to(this.position, {
      y: this.position.y + 20,
    })
    gsap.to(this, {
      opacity: 0,
    })
    audio.Battle.stop()
    audio.Victory.play()
  }

  attack({ attack, recipient, renderedSprites }) {
    const dialogue = document.querySelector('#dialogueBox')
    dialogue.style.display = 'block'
    dialogue.innerHTML = this.name + ' used ' + attack.name

    let healthBar = '#enemyHealthBar'
    if (this.isEnemy) healthBar = '#playerHealthBar'

    let rotation = 1
    if (this.isEnemy) rotation = -2.2

    recipient.health -= attack.damage

    switch (attack.name) {
      case 'Tackle':
        const tl = gsap.timeline()

        let movementDistance = 20
        if (this.isEnemy) movementDistance = -20

        tl.to(this.position, {
          x: this.position.x - movementDistance,
        })
          .to(this.position, {
            x: this.position.x + movementDistance * 2,
            duration: 0.1,
            onComplete: () => {
              // Enemy actually gets hit
              audio.TackleHit.play()
              gsap.to(healthBar, {
                width: recipient.health + '%',
              })

              gsap.to(recipient.position, {
                x: recipient.position.x + 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08,
              })

              gsap.to(recipient, {
                opacity: 0,
                yoyo: true,
                repeat: 5,
                duration: 0.08,
              })
            },
          })
          .to(this.position, {
            x: this.position.x,
          })
        break
      case 'Fireball':
        audio.InitFireball.play()
        const fireballImage = new Image()
        fireballImage.src = fireballImg
        const fireball = new Sprite({
          position: {
            x: this.position.x,
            y: this.position.y,
          },
          image: fireballImage,
          frames: { max: 4, hold: 10 },
          animate: true,
          rotation,
        })

        renderedSprites.splice(1, 0, fireball)

        gsap.to(fireball.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          onComplete: () => {
            // Enemy actually gets hit
            audio.FireballHit.play()
            gsap.to(healthBar, {
              width: recipient.health + '%',
            })

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08,
            })

            gsap.to(recipient, {
              opacity: 0,
              yoyo: true,
              repeat: 5,
              duration: 0.08,
            })
            renderedSprites.splice(1, 1)
          },
        })

        break
    }
  }
}

export class Boundary {
  static width = 48
  static height = 48
  constructor({ position }) {
    this.position = position
    this.width = 48
    this.height = 48
  }

  draw() {
    c.fillStyle = 'rgba(255,0,0,0.0)'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
