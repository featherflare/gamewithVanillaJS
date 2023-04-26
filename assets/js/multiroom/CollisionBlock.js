const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

export class CollisionBlock {
  constructor({ position }) {
    this.position = position
    this.width = 64
    this.height = 64
  }

  draw() {
    c.fillStyle = 'rgba(255,0,0,0.5)'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
