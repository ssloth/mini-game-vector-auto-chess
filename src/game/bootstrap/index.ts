import { Game } from '@/core/Game';
import { BaseSoldier } from '@/data/soldier/base';
import loader from './loader';
import { shape, tank } from './loader';
import { BaseStatus } from '../data/status/BaseStatus';
const game = Game.getInstance();

game.load(...loader).then(() => {
  const textures = game.loaders.resources[tank].textures;
  const bs = new BaseSoldier(
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

  const bst = new BaseStatus(180, 180, textures['tank-default.png']);

  bs.addStatus(bst);

  console.log(bst.width, bst.height);

  bs.ticker$.subscribe(() => {
    bs.x += 0.5;
  });
});

export default game;
