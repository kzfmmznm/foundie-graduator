export default class MinigameBScene extends Phaser.Scene {
  private spacebar!: Phaser.Input.Keyboard.Key
  private bgm!: Phaser.Sound.BaseSound

  constructor() {
    super({ key: 'MinigameBScene' })
  }

  preload() {}

  create() {
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )

    /* Display image,
    and then play BGM */
    this.cameras.main.fadeIn(1000, 0, 0, 0)
    this.add.image(400, 300, 'minigame-vase')
    this.bgm = this.sound.add('minigame-bgm')
    this.bgm.play()
  }

  update() {
    if (this.spacebar.isDown) {
      this.sound.play('space-sound-effect')
      this.bgm.stop()
      this.cameras.main.fadeOut(1200, 0, 0, 0)
      this.scene.start('EndingScene')
    }
  }
}
