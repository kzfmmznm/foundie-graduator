export default class OnboardingScene extends Phaser.Scene {
  private spacebar!: Phaser.Input.Keyboard.Key
  private bgm!: Phaser.Sound.BaseSound

  constructor() {
    super({ key: 'OnboardingScene' })
  }

  preload() {}

  create() {
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )

    /* Display admin officer image, text explanation,
    and then play BGM */
    this.cameras.main.fadeIn(1000, 0, 0, 0)
    this.add.image(400, 300, 'onboarding')
    this.add.text(
      125,
      370,
      'You are now approved to join ID community.\nWelcome ... to ID!!!\nAs a new "Foundie", you are expected to survive this semester.\n\nTo be specific, I want you to see our faculties in Kaplan building\nand to solve some assignments from them!\n\nYou can use WASD keys to move around in the map\nand use SPACE key to talk to them.\nPlease talk to the person on the bottom left first. Then, Let\'s go!!!',
      {
        fontFamily: 'Helvetica Neue',
        fontSize: '18px',
        backgroundColor: 'black',
        padding: { left: 15, right: 15, top: 10, bottom: 10 },
        color: 'white',
      },
    )
    this.bgm = this.sound.add('onboarding-bgm')
    this.bgm.play()
  }

  update() {
    if (this.spacebar.isDown) {
      this.sound.play('space-sound-effect')
      this.bgm.stop()
      this.cameras.main.fadeOut(1200, 0, 0, 0)
      this.scene.start('MainScene')
    }
  }
}
