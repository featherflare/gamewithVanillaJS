import platform from '../images/mario/platform.png'
import platformSmallTall from '../images/mario/platformSmallTall.png'
import hills from '../images/mario/hills.png'
import background from '../images/mario/background.png'

import spriteRunLeft from '../images/mario/spriteRunLeft.png'
import spriteRunRight from '../images/mario/spriteRunRight.png'
import spriteStandLeft from '../images/mario/spriteStandLeft.png'
import spriteStandRight from '../images/mario/spriteStandRight.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.5

class Player {
  constructor() {
    this.speed = 5
    this.position = {
      x: 100,
      y: 100,
    }
    this.velocity = {
      x: 0,
      y: 1,
    }
    this.width = 66
    this.height = 150
    this.image = createImage(spriteStandRight)
    this.frames = 0
    this.sprites = {
      stand: {
        cropWidth: 177,
        width: 66,
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft),
      },
      run: {
        cropWidth: 341,
        width: 127.875,
        right: createImage(spriteRunRight),
        left: createImage(spriteRunLeft),
      },
    }

    this.currentSprite = this.sprites.stand.right
    this.currentCropWidth = this.sprites.stand.cropWidth
  }

  draw() {
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update() {
    this.frames += 1

    if (
      this.frames > 59 &&
      (this.currentSprite === this.sprites.stand.right ||
        this.currentSprite === this.sprites.stand.left)
    ) {
      this.frames = 0
    } else if (
      this.frames > 29 &&
      (this.currentSprite === this.sprites.run.right ||
        this.currentSprite === this.sprites.run.left)
    ) {
      this.frames = 0
    }

    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity
    }
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
      image,
    }

    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
      image,
    }

    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

let scrollOffset = 0

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}
let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)

let player = new Player()
let platforms = []

let genericObjects = []

let lastKey

function init() {
  platformImage = createImage(platform)

  player = new Player()
  platforms = [
    new Platform({
      x:
        platformImage.width * 4 +
        300 -
        2 +
        platformImage.width -
        platformSmallTallImage.width,
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({ x: -1, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width - 3, y: 470, image: platformImage }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 300 - 2,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 5 + 600 - 2,
      y: 470,
      image: platformImage,
    }),
  ]

  genericObjects = [
    new GenericObject({ x: -1, y: -1, image: createImage(background) }),
    new GenericObject({ x: -1, y: -1, image: createImage(hills) }),
  ]
}

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
}

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)
  genericObjects.forEach((genericObject) => {
    genericObject.draw()
  })
  platforms.forEach((platform) => {
    platform.draw()
  })
  player.update()

  if (keys.right.pressed && player.position.x < canvas.width / 2) {
    player.velocity.x = player.speed
  } else if (
    (keys.left.pressed && player.position.x > 0 + canvas.width / 10) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed
  } else {
    player.velocity.x = 0
  }

  if (keys.right.pressed) {
    scrollOffset += player.speed
    platforms.forEach((platform) => {
      platform.position.x -= player.speed
    })
    genericObjects.forEach((genericObject) => {
      genericObject.position.x -= player.speed * 0.66
    })
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed
    platforms.forEach((platform) => {
      platform.position.x += player.speed
    })
    genericObjects.forEach((genericObject) => {
      genericObject.position.x += player.speed * 0.66
    })
  }

  if (
    keys.right.pressed &&
    lastKey === 'right' &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frames = 1
    player.currentSprite = player.sprites.run.right
    player.currentCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width
  } else if (
    keys.left.pressed &&
    lastKey === 'left' &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.frames = 1
    player.currentSprite = player.sprites.run.left
    player.currentCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width
  } else if (
    !keys.left.pressed &&
    lastKey === 'left' &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.frames = 1
    player.currentSprite = player.sprites.stand.left
    player.currentCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width
  } else if (
    !keys.right.pressed &&
    lastKey === 'right' &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.frames = 1
    player.currentSprite = player.sprites.stand.right
    player.currentCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width
  }

  if (scrollOffset > platformImage.width * 500 + 300 - 2) {
    init()
  }

  if (player.position.y > canvas.height) {
    init()
  }

  //platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0
    }
  })
}

init()
animate()

addEventListener('keydown', ({ keyCode }) => {
  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      lastKey = 'left'
      keys.left.pressed = true
      break
    case 83:
      break
    case 68:
      lastKey = 'right'
      keys.right.pressed = true
      break
    case 87:
      player.velocity.y -= 15
      break
  }
})

addEventListener('keyup', ({ keyCode }) => {
  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      keys.left.pressed = false
      break
    case 83:
      break
    case 68:
      keys.right.pressed = false
      break
    case 87:
      break
  }
})
