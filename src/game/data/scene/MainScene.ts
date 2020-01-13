import { TextStyle, Text, Graphics, Container } from 'pixi.js';
import { Scene } from '@/core/Scene';
import { Game } from '@/core/Game';
import Board from '../view/Board';
import { Camp } from '../../core/base/Camp';
import { Player } from '@/core/Player';
import { Base } from '../soldier/base';

const style = new TextStyle({
  fontSize: 45,
  fill: 0x09a2fc,
});

export default class MainScene extends Scene {
  private static instance;

  static getInstance(): Scene {
    if (MainScene.instance) return MainScene.instance;
    return (MainScene.instance = new MainScene('main'));
  }

  public onCreate(): void {
    const game = Game.getInstance();
    const container = new Container();
    const app = game.application;
    const campA = new Camp('A');
    game.addCamp(campA);

    const player = new Player(campA);
    const base = new Base();
    container.addChild(base);
    player.addSoldier(base);

    app.stage.addChild(container);

    app.ticker.add(() => {
      player.soldiers.forEach(item => (item.x += 1));
    });
  }

  public onShow(): void {}

  public onHidden(): void {}
}
