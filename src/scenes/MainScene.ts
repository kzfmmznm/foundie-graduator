export default class MainScene extends Phaser.Scene {
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  faculty_a!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  private map!: Phaser.Tilemaps.Tilemap
  private layer!: Phaser.Tilemaps.TilemapLayer
  private bgm!: Phaser.Sound.BaseSound
  private upKey!: Phaser.Input.Keyboard.Key | null
  private leftKey!: Phaser.Input.Keyboard.Key | null
  private downKey!: Phaser.Input.Keyboard.Key | null
  private rightKey!: Phaser.Input.Keyboard.Key | null
  private spacebar!: Phaser.Input.Keyboard.Key | null

  private FRAME_RATE = 2
  // map!: Phaser.Tilemaps.Tilemap
  // tileset!: Phaser.Tilemaps.Tileset | null

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0)
    this.add.image(400, 300, 'map')

    this.bgm = this.sound.add('map-bgm')
    this.bgm.play()
    this.faculty_a = this.physics.add.sprite(600, 200, 'faculty-a-icon')
    this.player = this.physics.add.sprite(400, 300, 'main-player')

    // Creating map with tilemap
    // const map = this.make.tilemap({ key: 'map' })
    // const tiles = map.addTilesetImage('standard_tiles', 'tilset')
    // map.createLayer('ground', tiles)

    // Keys used in this scene
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )

    // Define animation of main player
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('main-player', {
        start: 4,
        end: 7,
      }),
      frameRate: this.FRAME_RATE,
      repeat: -1,
    })
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('main-player', {
        start: 12,
        end: 15,
      }),
      frameRate: this.FRAME_RATE,
      repeat: -1,
    })
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('main-player', {
        start: 0,
        end: 3,
      }),
      frameRate: this.FRAME_RATE,
      repeat: -1,
    })
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('main-player', {
        start: 8,
        end: 11,
      }),
      frameRate: this.FRAME_RATE,
      repeat: -1,
    })
    this.anims.create({
      key: 'stop',
      frames: this.anims.generateFrameNumbers('main-player', {
        start: 0,
        end: 0,
      }),
      frameRate: this.FRAME_RATE,
      repeat: -1,
    })
    // this.load.image('tileset', 'assets/map/tileset.png')
    // this.load.tilemapTiledJSON('map', 'assets/map/foundie-graduator.json')

    // this.tileset = this.map.addTilesetImage('map', 'tileset')
  }

  update(time: number, delta: number) {
    if (this.upKey.isDown) {
      this.player.setVelocityY(-100)
      this.player.anims.play('up', true)
    } else if (this.leftKey.isDown) {
      this.player.setVelocityX(-100)
      this.player.anims.play('left', true)
    } else if (this.downKey.isDown) {
      this.player.setVelocityY(100)
      this.player.anims.play('down', true)
    } else if (this.rightKey.isDown) {
      this.player.setVelocityX(100)
      this.player.anims.play('right', true)
    } else {
      this.player.setVelocityX(0)
      this.player.setVelocityY(0)
      this.player.anims.play('stop', true)
    }

    if (
      this.spacebar.isDown &&
      Math.sqrt(
        Math.pow(this.player.y - this.faculty_a.y, 2) +
          Math.pow(this.player.x - this.faculty_a.x, 2),
      ) < 50
    ) {
      this.bgm.stop()
      this.cameras.main.fadeOut(1200, 0, 0, 0)
      this.scene.start('FacultyAScene')
    }
  }
}
