export default class OnboardingScene extends Phaser.Scene {
  private spacebar!: Phaser.Input.Keyboard.Key
  private bgm!: Phaser.Sound.BaseSound

  constructor() {
    super({ key: 'EndingScene' })
  }

  preload() {}

  create() {
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )
    this.add.image(400, 300, 'ending')
    // Play ending music
    this.bgm = this.sound.add('ending-bgm')
    this.bgm.play()
    this.add.text(
      130,
      380,
      'Congraturations!!!\n\nNow, you have solved all of the assignments from the faculties\nand finished our foundation course.\n\nHowever, you would need to remoemver that\nthis is just the first step to becoming a great designer.\nI look forward to your further improvement in the next semester!',
      {
        fontFamily: 'Helvetica Neue',
        fontSize: '18px',
        backgroundColor: 'black',
        padding: { left: 15, right: 15, top: 10, bottom: 10 },
        color: 'white',
      },
    )
  }

  update(time: number, delta: number) {
    if (this.spacebar.isDown) {
      this.bgm.stop()
      this.cameras.main.fadeOut(1200, 0, 0, 0)
      this.scene.start('TitleScene')
    }
  }
}
