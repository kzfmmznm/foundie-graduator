export default class MainScene extends Phaser.Scene {
  private FRAME_RATE = 2

  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  private faculty_a!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  private faculty_b!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

  private map!: Phaser.Tilemaps.Tilemap
  private tileset!: Phaser.Tilemaps.Tileset
  private layer!: Phaser.Tilemaps.TilemapLayer
  private bgm!: Phaser.Sound.BaseSound

  // Operations are done through WASD keys and SPACE key
  private upKey!: Phaser.Input.Keyboard.Key
  private leftKey!: Phaser.Input.Keyboard.Key
  private downKey!: Phaser.Input.Keyboard.Key
  private rightKey!: Phaser.Input.Keyboard.Key
  private spacebar!: Phaser.Input.Keyboard.Key

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0)

    // Make map from tilemaps
    const map = this.make.tilemap({ key: 'map' })
    const tileset = map.addTilesetImage('tileset', 'tiles')
    this.layer = map.createLayer('ground', tileset, 0, 0)
    this.layer?.setCollisionByProperty({ collides: true })

    // Locate static and dynami characters
    let staticGroup = this.physics.add.staticGroup()
    this.faculty_a = staticGroup.create(48, 528, 'faculty-a-icon')
    this.faculty_b = staticGroup.create(528, 80, 'faculty-b-icon')
    this.player = this.physics.add.sprite(400, 300, 'main-player')

    // Set collisions
    this.player.setCollideWorldBounds(true)
    this.physics.add.collider(this.player, this.layer)
    this.physics.add.collider(this.player, this.faculty_a)
    this.physics.add.collider(this.player, this.faculty_b)

    // Keys used in this scene
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )

    // Play music
    this.bgm = this.sound.add('map-bgm')
    this.bgm.play()

    // Set animations of main player
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
  }

  update() {
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
      // If distance between main player and faculty is close enough
      Math.sqrt(
        Math.pow(this.player.y - this.faculty_a.y, 2) +
          Math.pow(this.player.x - this.faculty_a.x, 2),
      ) < 50
    ) {
      this.sound.play('space-sound-effect')
      this.bgm.stop()
      this.cameras.main.fadeOut(1200, 0, 0, 0)
      this.scene.start('FacultyAScene')
    }

    if (
      this.spacebar.isDown &&
      // If distance between main player and faculty is close enough
      Math.sqrt(
        Math.pow(this.player.y - this.faculty_b.y, 2) +
          Math.pow(this.player.x - this.faculty_b.x, 2),
      ) < 50
    ) {
      this.sound.play('space-sound-effect')
      this.bgm.stop()
      this.cameras.main.fadeOut(1200, 0, 0, 0)
      this.scene.start('FacultyBScene')
    }
  }
}
