import { Game } from '@/core/Game';
import { Base } from '@/data/soldier/base';
import loader from './loader';
import { shape, tank } from './loader';
const game = Game.getInstance();

game.load(...loader).then(() => {
  const textures = game.loaders.resources[tank].textures;
  const s = new Base(
    50,
    50,
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

  s.ticker$.subscribe(() => {
    s.x += 0.1;
  });
});

export default game;
