import * as pixi from 'pixi.js';
import { Observable, Observer } from 'rxjs';
import { Game } from '@/core/Game';
/**
 * 游戏基础的精灵类
 */
export default abstract class Sprite extends pixi.Sprite {
  public game: Game = Game.getInstance();
  public collide$: Observable<Sprite>;
  public ticker$: Observable<Sprite>;
  public data: any;
  constructor(x: number, y: number, width: number, height: number, textures: pixi.Texture) {
    super(textures);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.data = {};
    this.init();
  }

  private init(): void {
    this.anchor.set(0.5); // 设置原点
    this.game.application.stage.addChild(this);
    this.ticker$ = Observable.create((observer: Observer<any>) => {
      this.game.ticker.add(() => observer.next(undefined));
    });
  }

  public setX() {
    this.x;
  }
  public setY() {}
}
