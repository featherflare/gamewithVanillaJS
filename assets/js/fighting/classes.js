const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const gravity = 0.2

export class Sprite {
  constructor({
    position,
    velocity,
    imageSrc,
    scale = 1,
    frames = { max: 1 },
    offset = { x: 0, y: 0 },
  }) {
    this.position = position
    this.velocity = velocity
    this.height = 150
    this.width = 50
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.frames = { ...frames, elapsed: 0, val: 0, hold: 5 }
    this.offset = offset
  }

  draw() {
    c.drawImage(
      this.image,
      this.frames.val * (this.image.width / this.frames.max),
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.frames.max) * this.scale,
      this.image.height * this.scale
    )
  }

  animateFrames() {
    if (this.frames.max > 1) {
      this.frames.elapsed++
    }

    if (this.frames.elapsed % this.frames.hold === 0) {
      if (this.frames.val < this.frames.max - 1) this.frames.val++
      else this.frames.val = 0
    }
  }

  update() {
    this.draw()
    this.animateFrames()
  }
}

export class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = 'red',
    imageSrc,
    scale = 1,
    frames = { max: 1 },
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined },
  }) {
    super({ position, imageSrc, scale, offset })
    this.velocity = velocity
    this.height = 150
    this.width = 50
    this.lastKey
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    }
    this.color = color
    this.isAttacking
    this.health = 100
    this.frames = { ...frames, elapsed: 0, val: 0, hold: 10 }
    this.sprites = sprites
    this.dead = false

    for (const sprite in sprites) {
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc
    }
  }

  update() {
    this.draw()
    if (!this.dead) this.animateFrames()

    // attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    // draw the attack box
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // )

    this.position.y += this.velocity.y
    this.position.x += this.velocity.x

    if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
      this.velocity.y = 0
      this.position.y = 330
    } else {
      this.velocity.y += gravity
    }
  }

  attack() {
    this.switchSprites('attack1')
    this.isAttacking = true
  }

  takeHit() {
    this.health -= 20

    if (this.health <= 0) {
      this.switchSprites('death')
    } else {
      this.switchSprites('takeHit')
    }
  }

  switchSprites(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.frames.val === this.sprites.death.frames.max - 1)
        this.dead = true
      return
    }

    // overriding all other animations with the attack animation
    if (
      this.image === this.sprites.attack1.image &&
      this.frames.val < this.sprites.attack1.frames.max - 1
    )
      return

    // overide when fighter gets hit
    if (
      this.image === this.sprites.takeHit.image &&
      this.frames.val < this.sprites.takeHit.frames.max - 1
    )
      return

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.frames.max = this.sprites.idle.frames.max
          this.frames.val = 0
        }
        break
      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image
          this.frames.max = this.sprites.run.frames.max
          this.frames.val = 0
        }
        break
      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image
          this.frames.max = this.sprites.jump.frames.max
          this.frames.val = 0
        }
        break
      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image
          this.frames.max = this.sprites.fall.frames.max
          this.frames.val = 0
        }
        break
      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image
          this.frames.max = this.sprites.attack1.frames.max
          this.frames.val = 0
        }
        break
      case 'takeHit':
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image
          this.frames.max = this.sprites.takeHit.frames.max
          this.frames.val = 0
        }
        break
      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image
          this.frames.max = this.sprites.death.frames.max
          this.frames.val = 0
        }
        break
    }
  }
}
