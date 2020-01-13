import { Camp } from './base/Camp';
import { Soldier } from './base/Soldier';
export class Player {
  public camp: Camp;
  public soldiers: Soldier[];

  constructor(camp: Camp) {
    this.camp = camp;
    this.soldiers = [];
  }

  public addSoldier(soldier: Soldier) {
    this.soldiers.push(soldier);
  }

}
