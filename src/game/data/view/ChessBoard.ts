import { Container, loader, Sprite, Texture, BaseTexture } from 'pixi.js';
import { Game } from '@/core/Game';
import { BOARD } from '@/config/game.conf';
import { rect } from '@/bootstrap/loader';
import { Player } from '@/core/Player';
import '@/utils/patch';
class RectSprite extends PIXI.projection.Sprite3d {
  private player: Player;
  constructor(size: number, x: number, y: number, player?: Player, center?: boolean) {
    const texture = Game.getInstance().loaders.resources[rect].texture;
    super(texture);
    this.player = player;
    this.width = size;
    this.height = size;
    this.x = center ? x - this.width / 2 : x;
    this.y = center ? y - this.width / 2 : y;
  }
}

/**
 * 战斗棋盘背景 为正方形状,
 * 有 9x9 大格,每大格有 3x3 小格
 * 每个 战斗单位 初始化时,一定在 9*9 大格上
 */
export default class ChessBoard extends PIXI.projection.Camera3d {
  private player: Player;
  constructor(player: Player) {
    super();
    this.create();
    this.player = player;
  }

  create() {
    const app = Game.getInstance().application;
    const container = new PIXI.projection.Container3d();
    const boardSize = app.view.height;
    const gridSize = boardSize / BOARD.GARD_COUNT;
    const trans = (n: number) => gridSize * n; // 单位转换
    for (let i = 0; i <= BOARD.GARD_COUNT; i++) {
      for (let j = 0; j <= BOARD.GARD_COUNT; j++) {
        const rs = new RectSprite(gridSize, trans(i), trans(j), this.player, false);
        container.addChild(rs);
      }
    }
    this.position.set(app.screen.width / 2, app.screen.height / 2);
    this.setPlanes(350, 30, 10000);
    this.euler.x = Math.PI / 25             ;
    app.stage.addChild(this);

    container.position3d.y = -50;
    // MAKE CARDS LARGER:
    container.scale3d.set(1.5);
    // this.position.set(0, app.screen.height / 2);
    // /2, app.screen.height/2)
    // this.euler.x = Math.PI / 6;
    // container.position3d.y = -500;
    // container.scale3d.set(1.5);
    // container.width = container.height = boardSize;
    // this.setPlanes(1000, 10, 10000, true);
    // this.position.set(0, 0);
    // this.position3d.y = 10; // camera is above the ground
    // this.setPlanes(300, 30, 10000);
    // this.euler.x = Math.PI / 5;
    // container.euler.x = -Math.PI / 5;
    // container.position.set(boardSize/2, boardSize/2, 0);
    // container.euler.y = Math.PI / 5;
    this.addChild(container);
  }

  ready() {}

  fighting() {}

  end() {}
}
