import { Game } from '../core/Game';
import loader from './loader';
const game = new Game({});

game.load(...loader).then(() => {
  console.log('load end!');
});

export default game;
