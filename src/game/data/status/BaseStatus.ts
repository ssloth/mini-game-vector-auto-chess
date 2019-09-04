import { Status } from '@/core/base/Status';
import { Graphics } from 'pixi.js';

/**
 * 基础状态 包扩血条等
 */
export class BaseStatus extends Status {
  outerBar: Graphics;
  public onCreate() {
    const { x, y } = this;
    const innerBar = new Graphics();
    innerBar.beginFill(0x000000);
    innerBar.drawRect(x, y, 128, 8);
    innerBar.endFill();
    this.addChild(innerBar);

    const outerBar = new PIXI.Graphics();
    outerBar.beginFill(0xff3300);
    outerBar.drawRect(x, y, 128, 8);
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
    console.log(this.outerBar);
    this.data.outerBar.width -= 0.1;
  }
}
