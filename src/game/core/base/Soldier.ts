import Sprite from './Sprite';
import { Observable } from 'rxjs';
import { Skill } from './Skill';
import { Status } from './Status';
import { Camp } from './Camp';
import { Team } from './Team';
import { Game } from '@/core/Game';
import { Texture } from 'pixi.js';

/**
 * 战斗单位
 */
export abstract class Soldier extends Sprite {
  /** 基本信息 */
  private HP: number; // 血量
  private MP: number; // 魔法值
  private RNG: number; // 攻击距离
  private AS: number; // 攻击速度
  private ATK: number; // 攻击
  private ATS: number; // 魔法攻击
  private DEF: number; // 防御
  private ADF: number; // 魔法防御
  private LEVEL: number; // 等级
  private skills: Skill; // 技能

  /** 额外信息 */
  private camp: Camp; // 阵营
  private team: Team; // 队伍
  private status: Status; // 当前状态

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
    this.game.application.stage.addChild(this);
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
}
