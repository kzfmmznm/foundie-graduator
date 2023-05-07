import Phaser from 'phaser'

import LoadingScene from './scenes/LoadingScene'
import TitleScene from './scenes/TitleScene'
import OnboardingScene from './scenes/OnboardingScene'
import FacultyAScene from './scenes/FacultyAScene'
import MinigameAScene from './scenes/MinigameAScene'
import FacultyBScene from './scenes/FacultyBScene'
import MinigameBScene from './scenes/MinigameBScene'
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
    arcade: {},
  },
  scene: [
    LoadingScene,
    TitleScene,
    OnboardingScene,
    MainScene,
    FacultyAScene,
    MinigameAScene,
    FacultyBScene,
    MinigameBScene,
    EndingScene,
  ],
}

const game = new Phaser.Game(config)
