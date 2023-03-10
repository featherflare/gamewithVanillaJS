import pipeHorizontal from '../images/pacman/pipeHorizontal.png'
import pipeVertical from '../images/pacman/pipeVertical.png'
import pipeCorner1 from '../images/pacman/pipeCorner1.png'
import pipeCorner2 from '../images/pacman/pipeCorner2.png'
import pipeCorner3 from '../images/pacman/pipeCorner3.png'
import pipeCorner4 from '../images/pacman/pipeCorner4.png'
import pipeConnectorTop from '../images/pacman/pipeConnectorTop.png'
import pipeConnectorLeft from '../images/pacman/pipeConnectorLeft.png'
import pipeConnectorRight from '../images/pacman/pipeConnectorRight.png'
import pipeConnectorBottom from '../images/pacman/pipeConnectorBottom.png'
import capLeft from '../images/pacman/capLeft.png'
import capRight from '../images/pacman/capRight.png'
import capTop from '../images/pacman/capTop.png'
import capBottom from '../images/pacman/capBottom.png'
import pipeCross from '../images/pacman/pipeCross.png'
import block from '../images/pacman/block.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const scoreEl = document.getElementById('scoreEl')
const liveEl = document.getElementById('liveEl')
const screenPauseEl = document.getElementById('screenPauseEl')
const textEl = document.getElementById('textEl')
const btnEl = document.getElementById('btnEl')
const restartEl = document.getElementById('restartEl')
const resumeEl = document.getElementById('resumeEl')
const newEl = document.getElementById('newEl')

canvas.width = 19 * 40
canvas.height = 20 * 40

class Boundary {
  static width = 40
  static height = 40
  constructor({ position, image }) {
    this.position = position
    this.width = 40
    this.height = 40
    this.image = image
  }

  draw() {
    // c.fillStyle = 'blue'
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }
}

class Player {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.radius = 15
    this.radians = 0.75
    this.openRate = 0.06
    this.rotation = 0
  }
  draw() {
    c.save()
    c.translate(this.position.x, this.position.y)
    c.rotate(Math.PI * this.rotation)
    c.translate(-this.position.x, -this.position.y)
    c.beginPath()
    c.arc(
      this.position.x,
      this.position.y,
      this.radius,
      this.radians,
      Math.PI * 2 - this.radians
    )
    c.lineTo(this.position.x, this.position.y)
    c.fillStyle = 'yellow'
    c.fill()
    c.closePath()
    c.restore()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if (this.radians < 0 || this.radians > 0.75) {
      this.openRate = -this.openRate
    }
    this.radians += this.openRate
  }
}

class Ghost {
  static speed = 2
  constructor({ position, velocity, color = 'red' }) {
    this.position = position
    this.velocity = velocity
    this.radius = 15
    this.color = color
    this.prevCollisions = []
    this.speed = 2
    this.scared = false
    this.expried = false
  }
  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = this.scared
      ? this.expried
        ? this.color
        : 'blue'
      : this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

class Pellet {
  constructor({ position }) {
    this.position = position
    this.radius = 3
  }
  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = 'white'
    c.fill()
    c.closePath()
  }
}

class PowerUp {
  constructor({ position }) {
    this.position = position
    this.radius = 8
  }
  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = 'white'
    c.fill()
    c.closePath()
  }
}

class Score {
  constructor({ position, velocity, score }) {
    this.position = position
    this.velocity = velocity
    this.opacity = 1
    this.score = score
  }
  draw() {
    c.save()
    c.globalAlpha = this.opacity
    c.font = '14px sans-serif'
    c.fillStyle = 'white'
    c.textAlign = 'center'
    c.fillText(this.score, this.position.x, this.position.y)
    c.restore()
  }
  update() {
    this.draw()
    this.opacity -= 0.02
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

const pellets = []
const boundaries = []
const powerUps = []
const scores = []
const ghosts = []
const player = new Player({
  position: {
    x: Boundary.width + Boundary.width / 2,
    y: Boundary.height + Boundary.height / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
})

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
}

const status = {
  isPause: false,
  isOver: false,
}

let lastKey = ''
let score = 0
let live = 3
let plusScore = 10
let level = 0

const map = [
  [
    '1',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '5',
    '-',
    '-',
    '-',
    '5',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '2',
  ],
  [
    '|',
    ' ',
    '.',
    '.',
    '.',
    '.',
    '.',
    '|',
    '.',
    '.',
    '.',
    '|',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '[',
    ']',
    '.',
    '^',
    '.',
    '_',
    '.',
    '^',
    '.',
    '_',
    '.',
    '^',
    '.',
    '[',
    ']',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '.',
    'p',
    '.',
    '|',
    '.',
    '.',
    '.',
    '|',
    '.',
    '.',
    '.',
    '|',
    '.',
    'p',
    '.',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '1',
    ']',
    '.',
    '4',
    '-',
    ']',
    '.',
    '|',
    '.',
    '[',
    '-',
    '3',
    '.',
    '[',
    '2',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '|',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '|',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '|',
    '.',
    '|',
  ],
  [
    '_',
    '.',
    '_',
    '.',
    '[',
    ']',
    '.',
    '[',
    '-',
    '7',
    '-',
    ']',
    '.',
    '[',
    ']',
    '.',
    '_',
    '.',
    '_',
  ],
  [
    ' ',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    ' ',
  ],
  [
    '^',
    '.',
    '[',
    ']',
    '.',
    '^',
    '.',
    '1',
    ']',
    ' ',
    '[',
    '2',
    '.',
    '^',
    '.',
    '[',
    ']',
    '.',
    '^',
  ],
  [
    '|',
    '.',
    '.',
    '.',
    '.',
    '|',
    '.',
    '|',
    ' ',
    ' ',
    ' ',
    '|',
    '.',
    '|',
    '.',
    '.',
    '.',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '[',
    '2',
    '.',
    '|',
    '.',
    '6',
    '-',
    '-',
    '-',
    '8',
    '.',
    '|',
    '.',
    '1',
    ']',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '.',
    '|',
    '.',
    '_',
    '.',
    '_',
    '.',
    '.',
    '.',
    '_',
    '.',
    '_',
    '.',
    '|',
    '.',
    '.',
    '|',
  ],
  [
    '4',
    ']',
    '.',
    '|',
    '.',
    '.',
    '.',
    '.',
    '.',
    '^',
    '.',
    '.',
    '.',
    '.',
    '.',
    '|',
    '.',
    '[',
    '3',
  ],
  [
    ' ',
    '.',
    '.',
    '|',
    '.',
    '1',
    '-',
    ']',
    '.',
    '_',
    '.',
    '[',
    '-',
    '2',
    '.',
    '|',
    '.',
    '.',
    ' ',
  ],
  [
    '^',
    '.',
    '[',
    '3',
    '.',
    '|',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '|',
    '.',
    '4',
    ']',
    '.',
    '^',
  ],
  [
    '|',
    '.',
    '.',
    '.',
    '.',
    '|',
    '.',
    '^',
    '.',
    '^',
    '.',
    '^',
    '.',
    '|',
    '.',
    '.',
    '.',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '^',
    '.',
    '[',
    '3',
    '.',
    '|',
    '.',
    '_',
    '.',
    '|',
    '.',
    '4',
    ']',
    '.',
    '^',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '_',
    'p',
    '.',
    '.',
    '.',
    '_',
    '.',
    '.',
    '.',
    '_',
    '.',
    '.',
    '.',
    'p',
    '_',
    '.',
    '|',
  ],
  [
    '|',
    '.',
    '.',
    '.',
    '1',
    '2',
    '.',
    '.',
    '.',
    '^',
    '.',
    '.',
    '.',
    '1',
    '2',
    '.',
    '.',
    '.',
    '|',
  ],
  [
    '4',
    '-',
    '-',
    '-',
    '7',
    '7',
    '-',
    '-',
    '-',
    '7',
    '-',
    '-',
    '-',
    '7',
    '7',
    '-',
    '-',
    '-',
    '3',
  ],
]

function createImage(src) {
  const image = new Image()
  image.src = src
  return image
}

function generateMap() {
  if (level < 4) {
    level++
  }

  console.log(level)

  map.forEach((row, i) => {
    row.forEach((symbol, j) => {
      switch (symbol) {
        case '-':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeHorizontal),
            })
          )
          break
        case '|':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeVertical),
            })
          )
          break
        case '1':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeCorner1),
            })
          )
          break
        case '2':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeCorner2),
            })
          )
          break
        case '3':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeCorner3),
            })
          )
          break
        case '4':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeCorner4),
            })
          )
          break
        case '5':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeConnectorBottom),
            })
          )
          break
        case '6':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeConnectorRight),
            })
          )
          break
        case '7':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeConnectorTop),
            })
          )
          break
        case '8':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeConnectorLeft),
            })
          )
          break
        case 'b':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(block),
            })
          )
          break
        case '[':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(capLeft),
            })
          )
          break
        case ']':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(capRight),
            })
          )
          break
        case '^':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(capTop),
            })
          )
          break
        case '_':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(capBottom),
            })
          )
          break
        case '+':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage(pipeCross),
            })
          )
          break
        case '.':
          pellets.push(
            new Pellet({
              position: {
                x: Boundary.width * j + Boundary.width / 2,
                y: Boundary.height * i + Boundary.height / 2,
              },
            })
          )
          break

        case 'p':
          powerUps.push(
            new PowerUp({
              position: {
                x: Boundary.width * j + Boundary.width / 2,
                y: Boundary.height * i + Boundary.height / 2,
              },
            })
          )
          break
      }
    })
  })
  const color = ['red', 'pink', 'lightblue', 'orange']

  for (var i = 0; i < level; i++) {
    ghosts.pop()
  }

  console.log(ghosts)

  for (var i = 0; i < level; i++) {
    ghosts.push(
      new Ghost({
        position: {
          x: Boundary.width * 9 + Boundary.width / 2,
          y: Boundary.height * 9 + Boundary.height / 2,
        },
        velocity: {
          x: 0,
          y: -Ghost.speed,
        },
        color: color[i],
      })
    )
  }
}

generateMap()

function circleCollidesWithRectangle({ circle, rectangle }) {
  const padding = Boundary.width / 2 - circle.radius - 1
  return (
    circle.position.y - circle.radius + circle.velocity.y <=
      rectangle.position.y + rectangle.height + padding &&
    circle.position.x + circle.radius + circle.velocity.x >=
      rectangle.position.x - padding &&
    circle.position.y + circle.radius + circle.velocity.y >=
      rectangle.position.y - padding &&
    circle.position.x - circle.radius + circle.velocity.x <=
      rectangle.position.x + rectangle.width + padding
  )
}

function pipeTeleport({ object }) {
  const positionY = object.position.y
  object.position.y = positionY
  if (object.position.x - object.radius <= 10) {
    object.velocity.y = 0
    object.position.x = 21 * 40 - object.radius - 40
  } else if (object.position.x + object.radius >= 21 * 40 - 10) {
    object.velocity.y = 0
    object.position.x = object.radius + 40
  }
}

let frame = 0
let animationId
function animate() {
  if (status.isPause || status.isOver) {
    screenPauseEl.style.display = 'block'
    if (status.isPause && !status.isOver) {
      newEl.style.display = 'none'
      textEl.innerHTML = 'Pause Game'
    }
    if (!status.isPause && status.isOver) {
      resumeEl.style.display = 'none'
      restartEl.style.display = 'none'
      textEl.innerHTML = 'Game Over'
    }
    return
  } else {
    screenPauseEl.style.display = 'none'
  }
  animationId = requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  if (keys.w.pressed && lastKey === 'w') {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        circleCollidesWithRectangle({
          circle: { ...player, velocity: { x: 0, y: -5 } },
          rectangle: boundary,
        })
      ) {
        player.velocity.y = 0
        break
      } else {
        player.velocity.y = -5
      }
    }
  } else if (keys.a.pressed && lastKey === 'a') {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        circleCollidesWithRectangle({
          circle: { ...player, velocity: { x: -5, y: 0 } },
          rectangle: boundary,
        })
      ) {
        player.velocity.x = 0
        break
      } else {
        player.velocity.x = -5
      }
    }
  } else if (keys.s.pressed && lastKey === 's') {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        circleCollidesWithRectangle({
          circle: { ...player, velocity: { x: 0, y: 5 } },
          rectangle: boundary,
        })
      ) {
        player.velocity.y = 0
        break
      } else {
        player.velocity.y = 5
      }
    }
  } else if (keys.d.pressed && lastKey === 'd') {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        circleCollidesWithRectangle({
          circle: { ...player, velocity: { x: 5, y: 0 } },
          rectangle: boundary,
        })
      ) {
        player.velocity.x = 0
        break
      } else {
        player.velocity.x = 5
      }
    }
  }

  // detect collision between ghost and player
  for (let i = ghosts.length - 1; 0 <= i; i--) {
    const ghost = ghosts[i]
    //ghost touches player
    if (
      Math.hypot(
        ghost.position.x - player.position.x,
        ghost.position.y - player.position.y
      ) <
      ghost.radius + player.radius
    ) {
      if (ghost.scared) {
        ghosts.splice(i, 1)
        score += 500
        scoreEl.innerHTML = score

        scores.push(
          new Score({
            position: {
              x: ghost.position.x,
              y: ghost.position.y,
            },
            velocity: {
              x: 0,
              y: -0.05,
            },
            score: '500',
          })
        )
      } else {
        if (live > 0) {
          live -= 1
          liveEl.innerHTML = live
          player.position.x = Boundary.width + Boundary.width / 2
          player.position.y = Boundary.height + Boundary.height / 2
          player.velocity.x = 0
          player.velocity.y = 0
        } else {
          status.isOver = true
          screenPauseEl.style.display = 'block'
          resumeEl.style.display = 'none'
          restartEl.style.display = 'none'
          textEl.innerHTML = 'Game Over'
          cancelAnimationFrame(animationId)
        }
      }
    }
  }

  //win condition goes here
  if (pellets.length === 0) {
    generateMap()
  }

  // power up here
  for (let i = powerUps.length - 1; 0 <= i; i--) {
    const powerUp = powerUps[i]
    powerUp.draw()

    // player collides with power up
    if (
      Math.hypot(
        powerUp.position.x - player.position.x,
        powerUp.position.y - player.position.y
      ) <
      powerUp.radius + player.radius
    ) {
      powerUps.splice(i, 1)

      // make ghosts scared
      ghosts.forEach((ghost) => {
        ghost.scared = true
        plusScore = 50

        setTimeout(() => {
          ghost.expried = true
        }, 2000)

        const color = ghost.color
        setTimeout(() => {
          plusScore = 10
          ghost.color = color
          ghost.scared = false
          ghost.expried = false
        }, 3000)
      })
    }
  }

  // touch pellet here
  for (let i = pellets.length - 1; 0 <= i; i--) {
    const pellet = pellets[i]
    pellet.draw()

    if (
      Math.hypot(
        pellet.position.x - player.position.x,
        pellet.position.y - player.position.y
      ) <
      pellet.radius + player.radius
    ) {
      pellets.splice(i, 1)
      score += plusScore
      scoreEl.innerHTML = score

      scores.push(
        new Score({
          position: {
            x: pellet.position.x,
            y: pellet.position.y,
          },
          velocity: {
            x: 0,
            y: -0.05,
          },
          score: `${plusScore}`,
        })
      )
    }
  }

  scores.forEach((score, i) => {
    if (score.opacity <= 0) {
      setTimeout(() => {
        scores.splice(i, 1)
      }, 0)
    } else score.update()
  })

  boundaries.forEach((boundary) => {
    boundary.draw()
    if (circleCollidesWithRectangle({ circle: player, rectangle: boundary })) {
      player.velocity.y = 0
      player.velocity.x = 0
    }
  })

  player.update()

  ghosts.forEach((ghost) => {
    if (ghost.expried) {
      if (frame % 10 == 5) {
        console.log('1')
        ghost.color = 'blue'
      } else if (frame % 10 == 0) {
        console.log('2')
        ghost.color = 'white'
      }
    }
    ghost.update()

    const collisions = []
    boundaries.forEach((boundary) => {
      if (
        !collisions.includes('right') &&
        circleCollidesWithRectangle({
          circle: { ...ghost, velocity: { x: ghost.speed, y: 0 } },
          rectangle: boundary,
        })
      ) {
        collisions.push('right')
      }

      if (
        !collisions.includes('left') &&
        circleCollidesWithRectangle({
          circle: { ...ghost, velocity: { x: -ghost.speed, y: 0 } },
          rectangle: boundary,
        })
      ) {
        collisions.push('left')
      }

      if (
        !collisions.includes('up') &&
        circleCollidesWithRectangle({
          circle: { ...ghost, velocity: { x: 0, y: -ghost.speed } },
          rectangle: boundary,
        })
      ) {
        collisions.push('up')
      }

      if (
        !collisions.includes('down') &&
        circleCollidesWithRectangle({
          circle: { ...ghost, velocity: { x: 0, y: ghost.speed } },
          rectangle: boundary,
        })
      ) {
        collisions.push('down')
      }
    })

    if (collisions.length > ghost.prevCollisions.length)
      ghost.prevCollisions = collisions
    if (ghost.position.x - ghost.radius <= 5) {
      ghost.prevCollisions = []
      ghost.velocity.x = -5
      ghost.position.x = 21 * 40 - ghost.radius - 40
    } else if (ghost.position.x + ghost.radius >= 20 * 40 - 5) {
      ghost.prevCollisions = []
      ghost.velocity.x = 5
      ghost.position.x = 0 + ghost.radius + 40
    }

    if (JSON.stringify(collisions) != JSON.stringify(ghost.prevCollisions)) {
      if (ghost.velocity.x > 0) ghost.prevCollisions.push('right')
      else if (ghost.velocity.x < 0) ghost.prevCollisions.push('left')
      else if (ghost.velocity.y < 0) ghost.prevCollisions.push('up')
      else if (ghost.velocity.y > 0) ghost.prevCollisions.push('down')

      const pathways = ghost.prevCollisions.filter((collision) => {
        return !collisions.includes(collision)
      })

      const direction = pathways[Math.floor(Math.random() * pathways.length)]

      switch (direction) {
        case 'down':
          ghost.velocity.y = ghost.speed
          ghost.velocity.x = 0
          break
        case 'up':
          ghost.velocity.y = -ghost.speed
          ghost.velocity.x = 0
          break
        case 'right':
          ghost.velocity.y = 0
          ghost.velocity.x = ghost.speed
          break
        case 'left':
          ghost.velocity.y = 0
          ghost.velocity.x = -ghost.speed
          break
      }

      ghost.prevCollisions = []
    }
  })

  if (player.velocity.x > 0) player.rotation = 0
  else if (player.velocity.x < 0) player.rotation = 1
  else if (player.velocity.y > 0) player.rotation = 0.5
  else if (player.velocity.y < 0) player.rotation = 1.5
  pipeTeleport({ object: player })
  frame++
} // end of animate()

animate()

addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break
    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break
    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
    case ' ':
      status.isPause = !status.isPause
      if (!status.isPause) {
        requestAnimationFrame(animate)
      }
      break
  }
})

addEventListener('keyup', ({ key }) => {
  switch (key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case ' ':
      break
  }
})

resumeEl.addEventListener('click', () => {
  status.isPause = !status.isPause
  requestAnimationFrame(animate)
})

restartEl.addEventListener('click', () => {
  status.isOver = false
  status.isPause = false
  player.velocity.x = 0
  player.velocity.y = 0
  player.position.x = Boundary.width + Boundary.width / 2
  player.position.y = Boundary.height + Boundary.height / 2
  player.rotation = 0
  score = 0
  level = 0
  generateMap()
  requestAnimationFrame(animate)
})

newEl.addEventListener('click', () => {
  status.isOver = false
  status.isPause = false
  player.velocity.x = 0
  player.velocity.y = 0
  player.position.x = Boundary.width + Boundary.width / 2
  player.position.y = Boundary.height + Boundary.height / 2
  player.rotation = 0
  score = 0
  level = 0
  generateMap()
  requestAnimationFrame(animate)
})
