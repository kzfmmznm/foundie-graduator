import Phaser from 'phaser'
import AssetDownloaderScene from './scenes/AssetDownloaderScene'
import MainScene from './scenes/MainScene'

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
  scene: [AssetDownloaderScene, MainScene],
}

new Phaser.Game(config)
