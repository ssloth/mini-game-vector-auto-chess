import * as pixi from 'pixi.js';
import { Observable } from 'rxjs';
import { Game } from '@/core/Game';
/**
 * 游戏基础的精灵类
 */
export default abstract class Sprite extends pixi.Sprite {
  public game: Game = Game.getInstance();
  public collide$: Observable<Sprite>;
  constructor(x: number, y: number, width: number, height: number, textures: pixi.Texture) {
    super(textures);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = x;
    this.init();
  }

  private init(): void {
    this.anchor.set(0.5); // 设置原点
  }
}
