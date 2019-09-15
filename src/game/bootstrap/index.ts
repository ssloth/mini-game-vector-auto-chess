import { Game } from '@/core/Game';
import MenuScene from '@/data/scene/MenuScene';
import MainScene from '@/data/scene/MainScene';
import loader from './loader';

const game = Game.getInstance();
game.load(...loader).then(() => {
  const menuScene = new MenuScene('menu');
  const mainSence = new MainScene('main');

  game
    .addScene(menuScene)
    .addScene(mainSence)
    .start(mainSence);
});

export default game;
