import Phaser from 'phaser'
import PreloaderScene from './scenes/PreloaderScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    width: 800,
    height: 600,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [PreloaderScene],
}

const game = new Phaser.Game(config)

export default game
