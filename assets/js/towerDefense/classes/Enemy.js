import enemy from '../../../images/tower-defense/orc.png'
import { waypoints } from '../waypoints'
import { Sprite } from './Sprite'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

export class Enemy extends Sprite {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position, imageSrc: enemy, frames: { max: 7 } })
    this.width = 100
    this.height = 100
    this.waypointIndex = 0
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    }
    this.radius = 50
    this.health = 100
    this.velocity = {
      x: 0,
      y: 0,
    }
  }

  draw() {
    super.draw()

    // health bar
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y - 15, this.width, 10)

    c.fillStyle = 'green'
    c.fillRect(
      this.position.x,
      this.position.y - 15,
      (this.width * this.health) / 100,
      10
    )
  }

  update() {
    this.draw()
    super.update()

    const waypoint = waypoints[this.waypointIndex]
    const yDistance = waypoint.y - this.center.y
    const xDistance = waypoint.x - this.center.x
    const angle = Math.atan2(yDistance, xDistance)

    const speed = 3

    this.velocity.x = Math.cos(angle)
    this.velocity.y = Math.sin(angle)

    this.position.x += this.velocity.x * speed
    this.position.y += this.velocity.y * speed

    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    }

    if (
      Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) <
        Math.abs(this.velocity.x * speed) &&
      Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) <
        Math.abs(this.velocity.y * speed) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++
    }
  }
}
