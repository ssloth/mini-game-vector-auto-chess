import Sprite from './Sprite';
import { Soldier } from './Soldier';
import { Texture } from 'pixi.js';

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

  constructor(width: number, height: number, texture: Texture, offset: Offset = { x: 0, y: 0 }) {
    super(0, 0, width, height, texture);
    this.id = Status.count++;
    this.offset = offset;
  }

  public setDuration(duration: number): Status {
    this.duration = duration;
    return this;
  }

  public bindSoldier(soldier: Soldier): Status {
    this.soldier = soldier;
    this.soldier.game.ticker.add(() => {
      this.x = soldier.x + this.offset.x;
      this.y = soldier.y + this.offset.y;
    });
    return this;
  }

  public unbindSoldier(soldier: Soldier): Status {
    this.soldier.removeStatus(this);
    return this;
  }
}
