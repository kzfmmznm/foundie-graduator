export default class FacultyAScene extends Phaser.Scene {
  private spacebar!: Phaser.Input.Keyboard.Key
  private bgm!: Phaser.Sound.BaseSound

  constructor() {
    super({ key: 'FacultyAScene' })
  }

  preload() {}

  create() {
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )

    this.cameras.main.fadeIn(1000, 0, 0, 0)
    this.add.image(400, 300, 'faculty-a')
    this.bgm = this.sound.add('onboarding-bgm')
    this.bgm.play()

    this.add.text(
      150,
      380,
      'Well you found me!\nI expect you to solve my assignment here.\nThat is ...\n"IMAGE TRACING".\n\nPlease use mouse and trace the figure of vace in canvas.\nYou need to take good score to pass this assignment\n\nThen, Let\'s go!!!',
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
      this.scene.start('MinigameAScene')
    }
  }
}
