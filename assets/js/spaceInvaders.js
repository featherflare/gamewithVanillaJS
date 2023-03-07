import spaceship from '../images/spaceInvaders/spaceship.png'
import inv from '../images/spaceInvaders/invader.png'

const canvas = document.querySelector('canvas')
const scoreEl = document.querySelector('#scoreEl')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

class Player {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0,
    }

    this.rotation = 0
    this.opacity = 1

    const image = new Image()
    image.src = spaceship
    image.onload = () => {
      const scale = 0.15
      this.image = image
      this.width = image.width * scale
      this.height = image.height * scale
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
      }
    }
  }

  draw() {
    // c.fillStyle = 'red'
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.save()
    c.globalAlpha = this.opacity
    c.translate(
      player.position.x + player.width / 2,
      player.position.y + player.height / 2
    )
    c.rotate(this.rotation)
    c.translate(
      -player.position.x - player.width / 2,
      -player.position.y - player.height / 2
    )
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
    c.restore()
  }

  update() {
    if (this.image) {
      this.draw()
      this.position.x += this.velocity.x
    }
  }
}

class Projectile {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity

    this.radius = 3
  }

  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = 'red'
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

class Particle {
  constructor({ position, velocity, radius, color, fades }) {
    this.position = position
    this.velocity = velocity

    this.radius = radius
    this.color = color

    this.opcity = 1
    this.fades = fades
  }

  draw() {
    c.save()
    c.globalAlpha = this.opcity
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.fades) this.opcity -= 0.01
  }
}

class InvaderProjectile {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity

    this.width = 3
    this.height = 10
  }

  draw() {
    c.fillStyle = 'white'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

class Invader {
  constructor({ position }) {
    this.velocity = {
      x: 0,
      y: 0,
    }

    const image = new Image()
    image.src = inv
    image.onload = () => {
      const scale = 1
      this.image = image
      this.width = image.width * scale
      this.height = image.height * scale
      this.position = {
        x: position.x,
        y: position.y,
      }
    }
  }

  draw() {
    // c.fillStyle = 'red'
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update({ velocity }) {
    if (this.image) {
      this.draw()
      this.position.x += velocity.x
      this.position.y += velocity.y
    }
  }

  shoot(invaderProjectile) {
    invaderProjectile.push(
      new InvaderProjectile({
        position: {
          x: this.position.x + this.width / 2,
          y: this.position.y + this.height,
        },
        velocity: {
          x: 0,
          y: 5,
        },
      })
    )
  }
}

class Grid {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    }
    this.velocity = {
      x: 2,
      y: 0,
    }
    this.invaders = []

    const columns = Math.floor(Math.random() * 10 + 2)
    const rows = Math.floor(Math.random() * 5 + 2)

    this.width = columns * 30

    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        this.invaders.push(
          new Invader({
            position: {
              x: x * 30,
              y: y * 30,
            },
          })
        )
      }
    }
  }
  update() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    this.velocity.y = 0

    if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
      this.velocity.x = -this.velocity.x
      this.velocity.y = 30
    }
  }
}

class Score {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.opacity = 1
  }
  draw() {
    c.save()
    c.globalAlpha = this.opacity
    c.font = '14px sans-serif'
    c.fillStyle = 'white'
    c.textAlign = 'center'
    c.fillText('100', this.position.x, this.position.y)
    c.restore()
  }
  update() {
    this.draw()
    this.opacity -= 0.02
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

class Bomb {
  constructor({ position, velocity, color }) {
    this.position = position
    this.velocity = velocity
    this.color = color

    this.radius = 20
    this.opacity = 1

    this.radiusUpdate = 0
    this.opacityUpdate = 0

    this.explode = false
  }

  draw() {
    c.save()
    c.globalAlpha = this.opacity
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore()
  }
  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    this.radius += this.radiusUpdate
    this.opacity += this.opacityUpdate

    if (
      this.position.x + this.radius >= canvas.width ||
      this.position.x - this.radius <= 0
    ) {
      this.velocity.x = -this.velocity.x
    }

    if (
      this.position.y + this.radius >= canvas.height ||
      this.position.y - this.radius <= 0
    ) {
      this.velocity.y = -this.velocity.y
    }
  }
}

class PowerUp {
  constructor({ position, velocity, color }) {
    this.position = position
    this.velocity = velocity
    this.color = color

    this.radius = 10

    this.hit = false
    this.opacity = 1
  }

  draw() {
    c.save()
    c.globalAlpha = this.opacity
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if (this.hit) {
      projectiles.push(
        new Projectile({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y,
          },
          velocity: { x: 0, y: -15 },
        })
      )
    }
  }

  shoot({ hit }) {
    this.hit = hit
  }
}

const player = new Player()
const projectiles = []
const grids = []
const invaderProjectiles = []
const scores = []
const particles = []
const bombs = []
const powerUps = []

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
}

let frame = 0
let randomInterval = Math.floor(Math.random() * 500) + 500
let game = {
  over: false,
  active: true,
}
let score = 0

for (let i = 0; i < 100; i++) {
  particles.push(
    new Particle({
      position: {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      },
      velocity: {
        x: 0,
        y: 0.3,
      },
      radius: Math.random() * 3,
      color: 'white',
    })
  )
}

function createParticles({ object, color, fades }) {
  for (let i = 0; i < 15; i++) {
    particles.push(
      new Particle({
        position: {
          x: object.position.x + object.width / 2,
          y: object.position.y + object.height / 2,
        },
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        radius: Math.random() * 3,
        color: color || '#baa0de',
        fades: fades,
      })
    )
  }
}

function collisionCheckCircleRect(circle, rect) {
  var distx = Math.abs(circle.position.x - rect.position.x)
  var disty = Math.abs(circle.position.y - rect.position.y)

  if (distx > rect.width / 2 + circle.radius) {
    return false
  }
  if (disty > rect.height / 2 + circle.radius) {
    return false
  }

  if (distx <= rect.width / 2) {
    return true
  }
  if (disty <= rect.height / 2) {
    return true
  }

  var hypot =
    (distx - rect.width / 2) * (distx - rect.width / 2) +
    (disty - rect.height / 2) * (disty - rect.height / 2)

  return hypot <= circle.radius * circle.radius
}

function animate() {
  if (!game.active) return
  requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  particles.forEach((particle, i) => {
    if (particle.position.y - particle.radius >= canvas.height) {
      particle.position.x = Math.random() * canvas.width
      particle.position.y = particle.radius
    }

    if (particle.opcity <= 0) {
      setTimeout(() => {
        particles.splice(i, 1)
      }, 0)
    } else particle.update()
  })
  scores.forEach((score, i) => {
    if (score.opacity <= 0) {
      setTimeout(() => {
        scores.splice(i, 1)
      }, 0)
    } else score.update()
  })
  powerUps.forEach((powerUp, i) => {
    if (powerUp.position.x >= canvas.width && powerUp.hit == false) {
      setTimeout(() => {
        powerUps.splice(i, 1)
      }, 0)
    } else {
      if (frame % 20 === 0) {
        powerUp.color = 'rgb(255,255,100)'
      } else if (frame % 20 === 10) {
        powerUp.color = 'yelow'
      }
      powerUp.update()
    }

    projectiles.forEach((projectile, i) => {
      if (
        projectile.position.y - projectile.radius <=
          powerUp.position.y + powerUp.radius &&
        projectile.position.x + projectile.radius >=
          powerUp.position.x - powerUp.radius &&
        projectile.position.x - projectile.radius <=
          powerUp.position.x + powerUp.radius &&
        projectile.position.y + projectile.radius >=
          powerUp.position.y - powerUp.radius
      ) {
        powerUp.shoot({ hit: true })
        powerUp.opacity = 0
        powerUp.update()
        setTimeout(() => {
          powerUp.shoot({ hit: false })
          powerUps.splice(i, 1)
        }, 2000)
        projectiles.splice(i, 1)
      }
    })
  })
  bombs.forEach((bomb, i) => {
    if (bomb.opacity <= 0) {
      setTimeout(() => {
        bombs.splice(i, 1)
      }, 0)
    } else {
      if (frame % 20 === 0) {
        bomb.color = 'rgb(255,100,100)'
      } else if (frame % 20 === 10) {
        bomb.color = 'red'
      }
      bomb.update()
    }
    projectiles.forEach((projectile, i) => {
      if (
        projectile.position.y - projectile.radius <=
          bomb.position.y + bomb.radius &&
        projectile.position.x + projectile.radius >=
          bomb.position.x - bomb.radius &&
        projectile.position.x - projectile.radius <=
          bomb.position.x + bomb.radius &&
        projectile.position.y + projectile.radius >=
          bomb.position.y - bomb.radius
      ) {
        bomb.radiusUpdate += 2
        bomb.opacityUpdate -= 0.02
        bomb.explode = true
        projectiles.splice(i, 1)
      }
    })
  })
  invaderProjectiles.forEach((invaderProjectile, index) => {
    if (
      invaderProjectile.position.y + invaderProjectile.height >=
      canvas.height
    ) {
      setTimeout(() => {
        invaderProjectiles.splice(index, 1)
      }, 0)
    } else invaderProjectile.update()

    if (
      invaderProjectile.position.y + invaderProjectile.height >=
        player.position.y &&
      invaderProjectile.position.x + invaderProjectile.width >=
        player.position.x &&
      invaderProjectile.position.x <= player.position.x + player.width
    ) {
      setTimeout(() => {
        invaderProjectiles.splice(index, 1)
        player.opacity = 0
        game.over = true
      }, 0)
      setTimeout(() => {
        game.active = false
      }, 2000)

      createParticles({
        object: player,
        color: 'white',
        fades: true,
      })
    }
  })
  projectiles.forEach((projectile, index) => {
    if (projectile.position.y + projectile.radius <= 0) {
      setTimeout(() => {
        projectiles.splice(index, 1)
      }, 0)
    }
    projectile.update()
  })

  grids.forEach((grid, gridIndex) => {
    grid.update()

    if (frame % 100 === 0 && grid.invaders.length > 0) {
      grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(
        invaderProjectiles
      )
    }

    grid.invaders.forEach((invader, i) => {
      invader.update({ velocity: grid.velocity })

      // bomb hit enemy
      bombs.forEach((bomb, i) => {
        if (bomb.explode && collisionCheckCircleRect(bomb, invader)) {
          setTimeout(() => {
            const invaderFound = grid.invaders.find((invader2) => {
              return invader2 === invader
            })
            const bombFound = bombs.find((bomb2) => bomb2 === bomb)

            //remove invader
            if (invaderFound && bombFound) {
              score += 50
              scoreEl.innerHTML = score

              scores.push(
                new Score({
                  position: {
                    x: invader.position.x + invader.width / 2,
                    y: invader.position.y + invader.height / 2,
                  },
                  velocity: {
                    x: 0,
                    y: -0.05,
                  },
                })
              )

              createParticles({
                object: invader,
                fades: true,
              })

              grid.invaders.splice(i, 1)
            }
          }, 0)
        }
      })

      // projectile hit enemy
      projectiles.forEach((projectile, j) => {
        if (
          projectile.position.y - projectile.radius <=
            invader.position.y + invader.height &&
          projectile.position.x + projectile.radius >= invader.position.x &&
          projectile.position.x - projectile.radius <=
            invader.position.x + invader.width &&
          projectile.position.y + projectile.radius >= invader.position.y
        ) {
          setTimeout(() => {
            const invaderFound = grid.invaders.find((invader2) => {
              return invader2 === invader
            })
            const projectileFound = projectiles.find(
              (projectile2) => projectile2 === projectile
            )

            //remove invader
            if (invaderFound && projectileFound) {
              score += 100
              scoreEl.innerHTML = score

              scores.push(
                new Score({
                  position: {
                    x: invader.position.x + invader.width / 2,
                    y: invader.position.y + invader.height / 2,
                  },
                  velocity: {
                    x: 0,
                    y: -0.05,
                  },
                })
              )

              createParticles({
                object: invader,
                fades: true,
              })

              grid.invaders.splice(i, 1)
              projectiles.splice(j, 1)

              if (grid.invaders.length > 0) {
                const firstInvader = grid.invaders[0]
                const lastInvader = grid.invaders[grid.invaders.length - 1]

                grid.width =
                  lastInvader.position.x -
                  firstInvader.position.x +
                  lastInvader.width
                grid.position.x = firstInvader.position.x
              } else {
                grids.splice(gridIndex, 1)
              }
            }
          }, 0)
        }
      })
    })
  })

  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.x = -7
    player.rotation = -0.15
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = 7
    player.rotation = 0.15
  } else {
    player.velocity.x = 0
    player.rotation = 0
  }

  if (keys.space.pressed) {
    projectiles.push(
      new Projectile({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y,
        },
        velocity: { x: 0, y: -15 },
      })
    )
  }

  if (frame % (randomInterval / 2) === 0) {
    const speed = (Math.random() - 0.5) * 8 + 2
    bombs.push(
      new Bomb({
        position: {
          x: (Math.random() + 0.05) * canvas.width - 20,
          y: (Math.random() + 0.05) * canvas.height - 20,
        },
        velocity: {
          x: speed,
          y: speed,
        },
        color: 'red',
      })
    )
  }

  if (frame % (randomInterval / 3) === 0) {
    powerUps.push(
      new PowerUp({
        position: {
          x: 0,
          y: Math.abs(Math.random() - 0.5) * canvas.height,
        },
        velocity: {
          x: 2,
          y: 0,
        },
      })
    )
  }

  if (frame % randomInterval === 0) {
    grids.push(new Grid())
    randomInterval = Math.floor(Math.random() * 500) + 500
  }

  frame++
}

animate()

addEventListener('keydown', ({ key }) => {
  if (game.over) return

  switch (key) {
    case 'a':
      keys.a.pressed = true
      break
    case 'd':
      keys.d.pressed = true
      break
    case ' ':
      projectiles.push(
        new Projectile({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y,
          },
          velocity: { x: 0, y: -15 },
        })
      )
      //   keys.space.pressed = true
      break
  }
})

addEventListener('keyup', ({ key }) => {
  switch (key) {
    case 'a':
      keys.a.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
    case ' ':
      //   keys.space.pressed = false
      break
  }
})
