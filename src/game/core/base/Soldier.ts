import Sprite from './Sprite';
import { Observable } from 'rxjs';
import { Skill } from './Skill';
import { Status } from './Status';
import { Camp } from './Camp';
import { Team } from './Team';
import { Texture } from 'pixi.js';

const MAX_LEVEL = 3;
/**
 * 战斗单位
 */
export abstract class Soldier extends Sprite {
  /** 基本信息 */
  readonly HP: number; // 血量
  readonly MP: number; // 魔法值
  readonly RNG: number; // 攻击距离
  readonly AS: number; // 攻击速度
  readonly ATK: number; // 攻击
  readonly ATS: number; // 魔法攻击
  readonly DEF: number; // 防御
  readonly ADF: number; // 魔法防御
  readonly LEVEL: number; // 等级
  readonly skills: Skill; // 技能

  private _HP: number; // 血量
  private _MP: number; // 魔法值
  private _RNG: number; // 攻击距离
  private _AS: number; // 攻击速度
  private _ATK: number; // 攻击
  private _ATS: number; // 魔法攻击
  private _DEF: number; // 防御
  private _ADF: number; // 魔法防御
  private _LEVEL: number; // 等级

  /** 额外信息 */
  private camp: Camp; // 阵营
  private team: Team; // 队伍
  private status: Array<Status>; // 当前状态

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    HP: number,
    MP: number,
    RNG: number,
    AS: number,
    ATK: number,
    ATS: number,
    DEF: number,
    ADF: number,
    LEVEL: number,
    texture: Texture
  ) {
    super(x, y, width, height, texture);
    this.HP = HP;
    this.MP = MP;
    this.RNG = RNG;
    this.AS = AS;
    this.ATK = ATK;
    this.ATS = ATS;
    this.DEF = DEF;
    this.ADF = ADF;
    this.LEVEL = LEVEL;
    this.texture = texture;
    this.create();
  }

  /** 初始化 */
  private create(): void {
    this.status = [];
  }

  get hp(): number {
    return Math.round(this._HP);
  }

  get mp(): number {
    return Math.round(this._MP);
  }

  get rng(): number {
    return Math.round(this._RNG);
  }

  get atk(): number {
    return Math.round(this._ATK);
  }

  get ats(): number {
    return Math.round(this._ATK);
  }

  get adf(): number {
    return Math.round(this._ADF);
  }

  get level(): number {
    return Math.round(this._LEVEL);
  }

  set hp(n: number) {
    if (n < 0) this._HP = 0;
    this._HP = n;
  }

  set mp(n: number) {
    if (n < 0) this._HP = 0;
    this._MP = n;
  }

  set rng(n: number) {
    if (n < 0) this._HP = 0;
    this._RNG = n;
  }

  set atk(n: number) {
    if (n < 0) this._HP = 0;
    this._ATK = n;
  }

  set ats(n: number) {
    if (n < 0) this._HP = 0;
    this._ATS = n;
  }

  set adf(n: number) {
    if (n < 0) this._HP = 0;
    this._ADF = n;
  }

  set level(n: number) {
    if (n < 1) this._LEVEL = 1;
    else if (n > MAX_LEVEL) this._LEVEL = MAX_LEVEL;
    else this._LEVEL = n;
  }

  /** 事件 */
  private attack$: Observable<Soldier>; // 攻击
  private releaseSkillr$: Observable<Soldier>; // 释放技能
  private status$: Observable<Soldier>; // 状态
  private die$: Observable<Soldier>; // 死亡

  /** 行为 */
  public attack(soldier: Soldier) {} // 攻击
  public releaseSkillr(soldier: Soldier) {} // 释放技能
  public move() {} // 移动
  public addStatus(status: Status): Soldier {
    this.status.push(status.bindSoldier(this));
    return this;
  }
  public removeStatus(status: Status): Soldier {
    return this;
  }
  public getStatus(label: string): Status {
    return this.status.find(item => item.label === label);
  }
}
