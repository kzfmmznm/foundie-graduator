export default class MainScene extends Phaser.Scene {
  map!: Phaser.Tilemaps.Tilemap
  tileset!: Phaser.Tilemaps.Tileset | null

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.add.image(400, 300, 'background')
    // this.map = this.make.tilemap({ key: 'foundie-graduator' })
    // this.tileset = this.map.addTilesetImage('map', 'tileset')
  }

  update(time: number, delta: number) {}

  // --
}
