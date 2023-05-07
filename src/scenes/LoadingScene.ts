export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadingScene' })
  }

  preload() {
    // Make template for loadingText
    const loadingText = (progress: number): string =>
      `Now loading ... ${Math.round(progress * 100)}%`

    // Make space for displaying loadingText
    const currentLoadingText = this.add
      .text(400, 300, loadingText(0), {
        fontFamily: 'Helvetica Neue',
        fontSize: '60px',
        color: '#333333',
      })
      .setOrigin(0.5)

    /* Start loading assets */
    // Loading characters
    this.load.spritesheet('main-player', 'assets/img/main_player.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    this.load.spritesheet('faculty-a-icon', 'assets/img/faculty_a_icon.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    this.load.spritesheet('faculty-b-icon', 'assets/img/faculty_b_icon.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    // Loading background images
    this.load.image('title-background', 'assets/img/title.png')
    this.load.image('onboarding', 'assets/img/onboarding.png')
    this.load.image('faculty-a', 'assets/img/faculty_a.png')
    this.load.image('faculty-b', 'assets/img/faculty_b.png')
    this.load.image('minigame-flower', 'assets/img/minigame_flower.png')
    this.load.image('minigame-vase', 'assets/img/minigame_vase.png')
    this.load.image('ending', 'assets/img/ending.png')
    // Loading musics and sound effects
    this.load.audio('onboarding-bgm', 'assets/bgm/onboarding.mp3')
    this.load.audio('map-bgm', 'assets/bgm/map.mp3')
    this.load.audio('minigame-bgm', 'assets/bgm/minigame.mp3')
    this.load.audio('ending-bgm', 'assets/bgm/ending.mp3')
    this.load.audio('space-sound-effect', 'assets/bgm/space_se.mp3')
    // Loading map related files
    this.load.image('map', 'assets/img/map.png')
    this.load.image('tiles', 'assets/map/tileset.png')
    this.load.tilemapTiledJSON('map', '/assets/map/kaplan.json')

    // Loading dummy images
    for (let i = 0; i < 1000; i++) {
      this.load.image('background' + i, 'assets/img/fdr5Z7.jpg')
    }
    // Track 'progress event and change the content of loadingText
    this.load.on('progress', (progress: number) => {
      currentLoadingText.text = loadingText(progress)
    })
  }

  create() {
    this.cameras.main.fadeOut(1200, 0, 0, 0)
    this.scene.start('TitleScene')
  }
}
