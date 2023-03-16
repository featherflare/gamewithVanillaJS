import map from '../../audios/pokemon/map.wav'
import battle from '../../audios/pokemon/battle.mp3'
import fireballHit from '../../audios/pokemon/fireballHit.wav'
import initBattle from '../../audios/pokemon/initBattle.wav'
import initFireball from '../../audios/pokemon/initFireball.wav'
import tackleHit from '../../audios/pokemon/tackleHit.wav'
import victory from '../../audios/pokemon/victory.wav'

export const audio = {
  Map: new Howl({
    src: map,
    html5: true,
    volume: 0.1,
  }),
  InitBattle: new Howl({
    src: initBattle,
    html5: true,
    volume: 0.1,
  }),
  Battle: new Howl({
    src: battle,
    html5: true,
    volume: 0.1,
  }),
  TackleHit: new Howl({
    src: tackleHit,
    html5: true,
    volume: 0.1,
  }),
  InitFireball: new Howl({
    src: initFireball,
    html5: true,
    volume: 0.1,
  }),
  FireballHit: new Howl({
    src: fireballHit,
    html5: true,
    volume: 0.1,
  }),
  Victory: new Howl({
    src: victory,
    html5: true,
    volume: 0.1,
  }),
}
