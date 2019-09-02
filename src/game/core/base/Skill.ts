import Sprite from './Sprite';
import { Soldier } from './Soldier';

enum SkillsTarget {
  ENEMY,
  FRIENF,
  ANY,
}

enum SkillsRange {
  SINGLE,
  LINE,
  RECT,
  ALL_ENEMY,
  ALL_FRIEND,
  ALL,
}

/**
 * 技能
 * 作用目标： target
 */
export abstract class Skill extends Sprite {
  static SkillsRange = SkillsRange;
  static SkillsTarget = SkillsTarget;

  private target: SkillsTarget;
  private range: SkillsRange;
  public release(soldier: Soldier): void {}
}
