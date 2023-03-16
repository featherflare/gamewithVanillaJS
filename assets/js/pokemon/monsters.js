import embySprite from '../../images/pokemon/embySprite.png'
import draggleSprite from '../../images/pokemon/draggleSprite.png'
import { attacks } from './attacks'

const embyImage = new Image()
embyImage.src = embySprite

const draggleImage = new Image()
draggleImage.src = draggleSprite

export const monster = {
  Emby: {
    position: {
      x: 280,
      y: 325,
    },
    image: { src: embySprite },
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    name: 'Emby',
    attacks: [attacks.Tackle, attacks.Fireball],
  },
  Draggle: {
    position: {
      x: 800,
      y: 100,
    },
    image: { src: draggleSprite },
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    isEnemy: true,
    name: 'Draggle',
    attacks: [attacks.Tackle, attacks.Fireball],
  },
}
