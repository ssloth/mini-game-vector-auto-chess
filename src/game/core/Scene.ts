import { Container } from 'pixi.js';
import { Game } from './Game';
export abstract class Scene extends Container {
  public name: string;
  constructor(name: string) {
    super();
    this.onCreate();
    this.visible = false;
    this.name = name;
    Game.getInstance().application.stage.addChild(this);
  }

  public changeScene(name: string) {
    const target: Scene = Game.getInstance().getScene(name);
    this.onHidden();
    this.visible = false;
    target.onShow();
    target.visible = true;
  }

  public abstract onCreate(): void;
  public abstract onShow(): void;
  public abstract onHidden(): void;
}
