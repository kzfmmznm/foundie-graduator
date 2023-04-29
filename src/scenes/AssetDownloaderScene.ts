export default class AssetDownloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'AssetDownloaderScene' })
  }

  preload() {
    this.load.image('background', 'assets/img/fdr5Z7.jpg')
    this.load.image('tileset', 'assets/map/tileset.png')
    this.load.tilemapTiledJSON('map', 'assets/map/foundie-graduator.json')
  }

  create() {
    this.scene.start('MainScene')
  }
}
