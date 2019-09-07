import { Container, loader, Sprite } from 'pixi.js';
// import * as PIXI from 'pixi.js';
import { Game } from '@/core/Game';
import { BOARD } from '@/config/game.conf';
import { rect } from '@/bootstrap/loader';

class RectSprite extends Sprite {
  constructor() {
    const loader = Game.getInstance().loaders;
    super(loader.resources[rect].texture);
  }
}

/**
 * 战斗棋盘背景 为正方形状,
 * 有 9x9 大格,每大格有 3x3 小格
 * 每个 战斗单位 初始化时,一定在 9*9 大格上
 */
export default class ChessBoard extends Container {
  constructor() {
    super();
    this.create();
  }

  create() {
    const app = Game.getInstance().application;
    const boardSize = app.view.height - BOARD.PADDING * 2;
    const gridSize = boardSize / BOARD.GARD_COUNT;
    const trans = (n: number) => gridSize * n; // 单位转换
    const line = new PIXI.Graphics();
    const layout = {
      offsetX: BOARD.PADDING, // 场景容器决定定位偏移值
      offsetY: BOARD.PADDING, // 场景容器决定定位偏移值
    };

    const rs = new RectSprite();

    for (let i = 0; i <= BOARD.GARD_COUNT; i++) {
      line.lineStyle(3, 0xffffff, 0.3);
      line.moveTo(layout.offsetX, trans(i) + layout.offsetY);
      line.lineTo(layout.offsetX + boardSize, trans(i) + layout.offsetY);
    }

    for (let i = 0; i <= BOARD.GARD_COUNT; i++) {
      line.lineStyle(3, 0xffffff, 0.3);
      line.moveTo(trans(i) + layout.offsetX, layout.offsetY);
      line.lineTo(trans(i) + layout.offsetX, boardSize + layout.offsetX);
    }
    this.addChild(line);
  }

  ready() {}

  fighting() {}

  end() {}
}
