import { Game } from '@/core/Game';
import MenuScene from '@/data/scene/MenuScene';
import MainScene from '@/data/scene/MainScene';
import loader from './loader';

const game = Game.getInstance();
game.load(...loader).then(item => {
  const menuScene = new MenuScene('menu');
  const mainSence = new MainScene('main');
  game
    .addScene(menuScene)
    .addScene(mainSence)
    .start(menuScene);
});

export default game;
