import * as THREE from 'three';
import { Game } from './Game';
export abstract class Scene extends THREE.Scene {
  public name: string;
  constructor(name: string) {
    super();
    this.onCreate();
    this.visible = false;
    this.name = name;
  }

  public changeScene(name: string) {
    const game = Game.getInstance();
    this.onHidden();
    game.changeSence(name);
    game.getScene(name).onShow();
  }

  public abstract onCreate(): void;
  public abstract onShow(): void;
  public abstract onHidden(): void;
}
