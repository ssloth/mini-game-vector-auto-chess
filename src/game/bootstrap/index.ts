import { Game } from '@/core/Game';
import { Base } from '@/data/soldier/base';
import loader from './loader';
import { shape, tank } from './loader';
const game = Game.getInstance();

game.load(...loader).then(() => {
  const textures = game.loaders.resources[tank].textures;
  const s = new Base(
    100,
    100,
    100,
    100,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    textures['tank-default.png']
  );
});

export default game;
