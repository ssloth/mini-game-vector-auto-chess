import { Game } from '@/core/Game';
import { Soldier } from '@/core/base/Soldier';
import { tank } from '@/bootstrap/loader';
import { getTexture } from '@/utils/resourceHelper';
import Sprite from '../../core/base/Sprite';
import { Scene } from '../../core/Scene';
import { Container } from 'pixi.js';

export class Base extends Soldier {
  constructor() {
    super(
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      getTexture(tank)['tank-default.png']
    );
  }

  public draw() {}

  public animation() {
    throw new Error('Method not implemented.');
  }

  public attack(soldier: Soldier) {
    throw new Error('Method not implemented.');
  }

  public releaseSkillr(soldier: Soldier) {
    throw new Error('Method not implemented.');
  }

  public move() {
    throw new Error('Method not implemented.');
  }

  public findEnemy() {
    throw new Error('Method not implemented.');
  }
}
