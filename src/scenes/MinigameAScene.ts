export default class MinigameAScene extends Phaser.Scene {
  private spacebar!: Phaser.Input.Keyboard.Key
  private bgm!: Phaser.Sound.BaseSound

  constructor() {
    super({ key: 'MinigameAScene' })
  }

  preload() {}

  create() {
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )

    this.cameras.main.fadeIn(1000, 0, 0, 0)
    this.add.image(400, 300, 'minigame-a')
    this.bgm = this.sound.add('minigame-bgm')
    this.bgm.play()
  }

  update(time: number, delta: number) {
    if (this.spacebar.isDown) {
      this.bgm.stop()
      this.cameras.main.fadeOut(1200, 0, 0, 0)
      this.scene.start('EndingScene')
    }
  }
}
