import { Status } from '@/core/base/Status';
import { Graphics } from 'pixi.js';
import { BASE } from '@/config/status.config';
/**
 * 基础状态 包扩血条等
 */
export class BaseStatus extends Status {
  outerBar: Graphics;
  public onCreate() {}
  public onUpdate(): void {}
  public onDestory(): void {}
  public onTicker() {}
}
