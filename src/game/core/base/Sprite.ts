import * as pixi from 'pixi.js';
import { Observable, Observer } from 'rxjs';
import { Game } from '@/core/Game';
import { Texture, Geometry, LineBasicMaterial, VertexColors, Color, Vector3, Shape } from 'three';
/**
 * 游戏基础的精灵类
 */
export default abstract class Sprite extends Geometry {
  public game: Game = Game.getInstance();
  public collide$: Observable<Sprite>;
  public ticker$: Observable<Sprite>;
  public data: any;
  constructor(x: number, y: number, width: number, height: number, textures: pixi.Texture) {
    super();
    this.data = {};
    this.init();
  }

  private init() {
    const triangleShape = new Shape();
    triangleShape.moveTo(0, 100); // 三角形起始位置
    triangleShape.lineTo(-100, -100);
    triangleShape.lineTo(100, -100);
    triangleShape.lineTo(0, 100);
  }
  public setX() {}
  public setY() {}
}
