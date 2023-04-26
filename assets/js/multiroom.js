import { Player } from './multiroom/Player'
import { Sprite } from './multiroom/Sprite'
import { keys } from './multiroom/eventListener'
import level1 from '../images/multiroom/backgroundLevel1.png'
import level2 from '../images/multiroom/backgroundLevel2.png'
import level3 from '../images/multiroom/backgroundLevel3.png'
import doorOpen from '../images/multiroom/doorOpen.png'
import idleRight from '../images/multiroom/king/idle.png'
import idleLeft from '../images/multiroom/king/idleLeft.png'
import runRight from '../images/multiroom/king/runRight.png'
import runLeft from '../images/multiroom/king/runLeft.png'
import enterDoor from '../images/multiroom/king/enterDoor.png'
import {
  collisionsLevel1,
  collisionsLevel2,
  collisionsLevel3,
} from './multiroom/data'
import './multiroom/utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

let parsedCollisions
let collisionBlocks
let background
export let doors

export const player = new Player({
  imageSrc: idleRight,
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: idleRight,
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: idleLeft,
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: runRight,
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: runLeft,
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: enterDoor,
      onComplete: () => {
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++

            if (level === 4) level = 1
            levels[level].init()
            player.switchSprite('idleRight')
            player.preventInput = false
            gsap.to(overlay, {
              opacity: 0,
            })
          },
        })
      },
    },
  },
})

let level = 1
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: { x: 0, y: 0 },
        imageSrc: level1,
      })

      doors = [
        new Sprite({
          position: { x: 767, y: 270 },
          imageSrc: doorOpen,
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 96
      player.position.y = 140

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: { x: 0, y: 0 },
        imageSrc: level2,
      })

      doors = [
        new Sprite({
          position: { x: 772, y: 336 },
          imageSrc: doorOpen,
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  3: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 750
      player.position.y = 230

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: { x: 0, y: 0 },
        imageSrc: level3,
      })

      doors = [
        new Sprite({
          position: { x: 175, y: 335 },
          imageSrc: doorOpen,
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
}

const overlay = {
  opacity: 0,
}

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  background.draw()

  // collisionBlocks.forEach((collisionBlock) => {
  //   collisionBlock.draw()
  // })

  doors.forEach((door) => {
    door.draw()
  })

  player.handleInput(keys)
  player.draw()
  player.update()

  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.restore()
}

levels[level].init()
animate()
