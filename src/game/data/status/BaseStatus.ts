import { Status } from '@/core/base/Status';
import { Graphics } from 'pixi.js';
import { BASE } from '@/config/status.config';
/**
 * 基础状态 包扩血条等
 */
export class BaseStatus extends Status {
  outerBar: Graphics;
  public onCreate() {
    const { x, y } = this;
    const innerBar = new Graphics();
    innerBar.beginFill(0x000000);
    innerBar.drawRect(x, y, BASE.WIDTH, BASE.HEIGHT);
    innerBar.endFill();
    this.addChild(innerBar);

    const outerBar = new Graphics();
    outerBar.beginFill(BASE.COLOR);
    outerBar.drawRect(x, y, BASE.WIDTH, BASE.HEIGHT);
    outerBar.endFill();
    this.addChild(outerBar);

    // TAG:1.不能直接将outerBar加到this上，不知道为什么
    this.outerBar = outerBar;
    this.data.outerBar = outerBar;

    return this;
  }

  public onUpdate(): void {
    try {
    } catch (error) {}
  }
  public onDestory(): void {}

  public onTicker() {
    // TAG:2.在create添加了outerBar，打印出undefined
    this.data.outerBar.width -= (BASE.WIDTH * this.soldier.hp) / this.soldier.HP;
  }
}
