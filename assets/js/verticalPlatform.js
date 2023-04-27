import { Player } from './verticalPlatform/classes/Player'
import backgroundImg from '../images/verticalPlatform/background.png'
import idle from '../images/verticalPlatform/warrior/Idle.png'
import run from '../images/verticalPlatform/warrior/Run.png'
import jump from '../images/verticalPlatform/warrior/Jump.png'
import fall from '../images/verticalPlatform/warrior/Fall.png'
import fallLeft from '../images/verticalPlatform/warrior/FallLeft.png'
import runLeft from '../images/verticalPlatform/warrior/RunLeft.png'
import idleLeft from '../images/verticalPlatform/warrior/IdleLeft.png'
import jumpLeft from '../images/verticalPlatform/warrior/JumpLeft.png'
import { Sprite } from './verticalPlatform/classes/Sprite'
import {
  floorCollisions,
  platformCollisions,
} from './verticalPlatform/data/collisions'
import { CollisionBlock } from './verticalPlatform/classes/CollisionBlock'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const scaledCanvas = {
  width: canvas.width / 4,
  height: canvas.height / 4,
}

const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36) {
  floorCollisions2D.push(floorCollisions.slice(i, i + 36))
}

const collisionBlocks = []
floorCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 202) {
      collisionBlocks.push(
        new CollisionBlock({
          position: {
            x: 16 * x,
            y: 16 * y,
          },
        })
      )
    }
  })
})

const platformCollisions2D = []
for (let i = 0; i < platformCollisions.length; i += 36) {
  platformCollisions2D.push(platformCollisions.slice(i, i + 36))
}

const platformCollisionBlocks = []
platformCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 202) {
      platformCollisionBlocks.push(
        new CollisionBlock({
          position: {
            x: 16 * x,
            y: 16 * y,
          },
          height: 4,
        })
      )
    }
  })
})

export const gravity = 0.1

const background = new Sprite({
  position: { x: 0, y: 0 },
  imageSrc: backgroundImg,
})

const player = new Player({
  position: { x: 100, y: 300 },
  collisionBlocks: collisionBlocks,
  platformCollisionBlocks: platformCollisionBlocks,
  imageSrc: idle,
  frameRate: 8,
  animations: {
    Idle: {
      imageSrc: idle,
      frameRate: 8,
      frameBuffer: 3,
    },
    Run: {
      imageSrc: run,
      frameRate: 8,
      frameBuffer: 5,
    },
    Jump: {
      imageSrc: jump,
      frameRate: 2,
      frameBuffer: 3,
    },
    Fall: {
      imageSrc: fall,
      frameRate: 2,
      frameBuffer: 3,
    },
    FallLeft: {
      imageSrc: fallLeft,
      frameRate: 2,
      frameBuffer: 3,
    },
    RunLeft: {
      imageSrc: runLeft,
      frameRate: 8,
      frameBuffer: 5,
    },
    IdleLeft: {
      imageSrc: idleLeft,
      frameRate: 8,
      frameBuffer: 3,
    },
    JumpLeft: {
      imageSrc: jumpLeft,
      frameRate: 2,
      frameBuffer: 3,
    },
  },
})

const backgroundImageHeight = 432

const camera = {
  position: {
    x: 0,
    y: -backgroundImageHeight + scaledCanvas.height,
  },
}

const keys = {
  d: { pressed: false },
  a: { pressed: false },
}

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.save()
  c.scale(4, 4)
  c.translate(camera.position.x, camera.position.y)
  background.update()
  //   collisionBlocks.forEach((collisionBlock) => {
  //     collisionBlock.update()
  //   })

  //   platformCollisionBlocks.forEach((platformCollisionBlock) => {
  //     platformCollisionBlock.update()
  //   })

  player.checkForHorizontalCanvasCollision()
  player.update()

  player.velocity.x = 0
  if (keys.d.pressed) {
    player.switchSprite('Run')
    player.velocity.x = 2
    player.lastDirection = 'right'
    player.shouldPanCameraToTheLeft({ canvas, camera })
  } else if (keys.a.pressed) {
    player.switchSprite('RunLeft')
    player.velocity.x = -2
    player.lastDirection = 'left'
    player.shouldPanCameraToTheRight({ canvas, camera })
  } else if (player.velocity.y === 0) {
    if (player.lastDirection === 'right') player.switchSprite('Idle')
    else player.switchSprite('IdleLeft')
  }

  if (player.velocity.y < 0) {
    player.shouldPanCameraDown({ camera, canvas })
    if (player.lastDirection === 'right') player.switchSprite('Jump')
    else player.switchSprite('JumpLeft')
  } else if (player.velocity.y > 0) {
    player.shouldPanCameraUp({ camera, canvas })
    if (player.lastDirection === 'right') player.switchSprite('Fall')
    else player.switchSprite('FallLeft')
  }

  c.restore()
}

animate()

addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'd':
      keys.d.pressed = true
      break
    case 'a':
      keys.a.pressed = true
      break
    case 'w':
      player.velocity.y = -4
      break
  }
})

addEventListener('keyup', ({ key }) => {
  switch (key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }
})
