import Phaser from 'phaser'
import LoadingScene from './scenes/LoadingScene'
import TitleScene from './scenes/TitleScene'
import OnboardingScene from './scenes/OnboardingScene'
import FacultyAScene from './scenes/FacultyAScene'
import MinigameAScene from './scenes/MinigameAScene'
import EndingScene from './scenes/EndingScene'
import MainScene from './scenes/MainScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    width: 800,
    height: 600,
  },
  backgroundColor: '#FFFFFF',
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
    },
  },
  scene: [
    LoadingScene,
    TitleScene,
    OnboardingScene,
    MainScene,
    FacultyAScene,
    MinigameAScene,
    EndingScene,
  ],
}

new Phaser.Game(config)
