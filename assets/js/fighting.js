import { Fighter, Sprite } from './fighting/classes'
import backgroundImg from '../images/fighting/background.png'
import shopImg from '../images/fighting/shop.png'
import samuraiAttack1 from '../images/fighting/samuraiMack/Attack1.png'
import samuraiDeath from '../images/fighting/samuraiMack/Death.png'
import samuraiFall from '../images/fighting/samuraiMack/Fall.png'
import samuraiIdle from '../images/fighting/samuraiMack/Idle.png'
import samuraiJump from '../images/fighting/samuraiMack/Jump.png'
import samuraiRun from '../images/fighting/samuraiMack/Run.png'
import samuraiTakeHit from '../images/fighting/samuraiMack/Take Hit - white silhouette.png'
import kenjiAttack1 from '../images/fighting/kenji/Attack1.png'
import kenjiDeath from '../images/fighting/kenji/Death.png'
import kenjiFall from '../images/fighting/kenji/Fall.png'
import kenjiIdle from '../images/fighting/kenji/Idle.png'
import kenjiJump from '../images/fighting/kenji/Jump.png'
import kenjiRun from '../images/fighting/kenji/Run.png'
import kenjiTakeHit from '../images/fighting/kenji/Take hit.png'
import {
  decreaseTimer,
  determineWinner,
  rectangularCollision,
  timerId,
} from './fighting/utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: backgroundImg,
})

const shop = new Sprite({
  position: {
    x: 600,
    y: 128,
  },
  imageSrc: shopImg,
  scale: 2.75,
  frames: {
    max: 6,
  },
})

export const player = new Fighter({
  position: {
    x: 0,
    y: 0,
  },
  velocity: { x: 0, y: 0 },
  offset: {
    x: 0,
    y: 0,
  },
  imageSrc: samuraiIdle,
  frames: { max: 8 },
  scale: 2.5,
  offset: {
    x: 215,
    y: 157,
  },
  sprites: {
    idle: {
      imageSrc: samuraiIdle,
      frames: { max: 8 },
    },
    run: {
      imageSrc: samuraiRun,
      frames: { max: 8 },
    },
    jump: {
      imageSrc: samuraiJump,
      frames: { max: 2 },
    },
    fall: {
      imageSrc: samuraiFall,
      frames: { max: 2 },
    },
    attack1: {
      imageSrc: samuraiAttack1,
      frames: { max: 6 },
    },
    takeHit: {
      imageSrc: samuraiTakeHit,
      frames: { max: 4 },
    },
    death: {
      imageSrc: samuraiDeath,
      frames: { max: 6 },
    },
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50,
    },
    width: 160,
    height: 50,
  },
})

export const enemy = new Fighter({
  position: {
    x: 400,
    y: 100,
  },
  velocity: { x: 0, y: 0 },
  color: 'blue',
  offset: {
    x: -50,
    y: 0,
  },
  imageSrc: kenjiIdle,
  frames: { max: 4 },
  scale: 2.5,
  offset: {
    x: 215,
    y: 167,
  },
  sprites: {
    idle: {
      imageSrc: kenjiIdle,
      frames: { max: 4 },
    },
    run: {
      imageSrc: kenjiRun,
      frames: { max: 8 },
    },
    jump: {
      imageSrc: kenjiJump,
      frames: { max: 2 },
    },
    fall: {
      imageSrc: kenjiFall,
      frames: { max: 2 },
    },
    attack1: {
      imageSrc: kenjiAttack1,
      frames: { max: 4 },
    },
    takeHit: {
      imageSrc: kenjiTakeHit,
      frames: { max: 3 },
    },
    death: {
      imageSrc: kenjiDeath,
      frames: { max: 7 },
    },
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50,
    },
    width: 170,
    height: 50,
  },
})

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
}

decreaseTimer()

function animate() {
  requestAnimationFrame(animate)

  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255,255,255,0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement
  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprites('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprites('run')
  } else {
    player.switchSprites('idle')
  }

  if (player.velocity.y < 0) {
    player.switchSprites('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprites('fall')
  }

  // enemy movement
  if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprites('run')
  } else if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprites('run')
  } else {
    enemy.switchSprites('idle')
  }

  if (enemy.velocity.y < 0) {
    enemy.switchSprites('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprites('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy,
    }) &&
    player.isAttacking &&
    player.frames.val === 4
  ) {
    enemy.takeHit()
    player.isAttacking = false
    gsap.to('#enemyHealth', {
      width: enemy.health + '%',
    })
  }

  // if player misses
  if (player.isAttacking && player.frames.val === 4) {
    player.isAttacking = false
  }

  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player,
    }) &&
    enemy.isAttacking &&
    enemy.frames.val === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false
    gsap.to('#playerHealth', {
      width: player.health + '%',
    })
  }

  // if enemy misses
  if (enemy.isAttacking && enemy.frames.val === 2) {
    enemy.isAttacking = false
  }

  // end game base on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }
}

animate()

addEventListener('keydown', ({ key }) => {
  if (!player.dead) {
    switch (key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        player.velocity.y -= 10
        break
      case ' ':
        player.attack()
        break
    }
  }

  if (!enemy.dead) {
    switch (key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y -= 10
        break
      case 'ArrowDown':
        enemy.attack()
        break
    }
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

  // enemy keys
  switch (key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})
