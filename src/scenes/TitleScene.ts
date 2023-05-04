export default class TitleScene extends Phaser.Scene {
  private spacebar!: Phaser.Input.Keyboard.Key

  constructor() {
    super({ key: 'TitleScene' })
  }

  preload() {}

  create() {
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )

    this.cameras.main.fadeIn(1000, 0, 0, 0)
    this.add.image(400, 300, 'title-background')
    this.add
      .text(400, 200, 'Foundie graduator', {
        fontFamily: 'Helvetica Neue',
        fontSize: '80px',
        backgroundColor: 'white',
        color: '#333333',
        stroke: 'black',
        strokeThickness: 3,
      })
      .setOrigin(0.5)

    this.add
      .text(400, 400, 'Press SPACE key to start game', {
        fontFamily: 'Helvetica Neue',
        backgroundColor: 'white',
        fontSize: '30px',
        color: '#333333',
      })
      .setOrigin(0.5)
  }

  update() {
    if (this.spacebar.isDown) {
      this.cameras.main.fadeOut(1200, 0, 0, 0)
      this.scene.start('OnboardingScene')
    }
  }
}
