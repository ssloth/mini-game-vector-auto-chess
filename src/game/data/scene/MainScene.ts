import { TextStyle, Text, Graphics } from 'pixi.js';
import { Scene } from '@/core/Scene';
import { Game } from '@/core/Game';
import ChessBoard from '../view/ChessBoard';
import { Camp } from '../../core/base/Camp';
import { Player } from '@/core/Player';

const style = new TextStyle({
  fontSize: 45,
  fill: 0x09a2fc,
});

export default class MainScene extends Scene {
  private chessBoard: ChessBoard;
  public onCreate(): void {
    const app = Game.getInstance().application;
    const player = new Player(new Camp('lzy'));
    const chessBoard = new ChessBoard(player);
    chessBoard.position.x = (app.view.width - chessBoard.width) / 2;
    this.addChild(chessBoard);
  }

  public onShow(): void {}

  public onHidden(): void {}
}
