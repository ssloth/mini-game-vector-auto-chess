import Sprite from './Sprite';
import { Soldier } from './Soldier';
import { Texture, ticker } from 'pixi.js';
import { throttleTime } from 'rxjs/operators';

interface Offset {
  x: number;
  y: number;
}

export abstract class Status extends Sprite {
  private static count = 0;
  private offset: Offset;
  public soldier: Soldier;
  public id: number;
  public label: string;
  public duration: number;
  public updateInterval: number = 1000;

  constructor(
    label: string,
    width: number,
    height: number,
    texture: Texture,
    offset: Offset = { x: 0, y: 0 }
  ) {
    super(0, 0, width, height, texture);
    this.label = label;
    this.id = Status.count++;
    this.offset = offset;
    this.create();
  }

  public create() {
    this.onCreate();
    this.ticker$.subscribe(() => this.onTicker());
    this.ticker$.pipe(throttleTime(this.updateInterval)).subscribe(() => this.onUpdate());
  }

  /**
   * 状态持续时间
   * @param duration
   */
  public setDuration(duration: number): Status {
    this.duration = duration;
    return this;
  }

  /**
   * 绑定状态作用的单位
   * @param soldier
   */
  public bindSoldier(soldier: Soldier): Status {
    this.soldier = soldier;
    // this.soldier.game.ticker.add(() => {
    //   this.x = soldier.x + this.offset.x;
    //   this.y = soldier.y + this.offset.y;
    // });
    return this;
  }

  /**
   * 与单位解除绑定
   * @param soldier
   */
  public unbindSoldier(soldier: Soldier): Status {
    this.soldier.removeStatus(this);
    this.onDestory();
    return this;
  }

  /**
   * 设置更新间隔，单位秒
   * @param n
   */
  public setUpdateInterval(n: number) {}

  public abstract onCreate(): void;
  public abstract onTicker(): void;
  public abstract onUpdate(): void;
  public abstract onDestory(): void;
}
