import * as THREE from 'three';
import { Scene } from '@/core/Scene';
import { Game } from '@/core/Game';
import ChessBoard from '../view/ChessBoard';
import { Camp } from '../../core/base/Camp';
import { Player } from '@/core/Player';

export default class MainScene extends Scene {
  public onCreate(): void {
    const player = new Player(new Camp('lzy'));
    const chessBoard = new ChessBoard(this, player);
  }

  public onShow(): void {}

  public onHidden(): void {}
}
