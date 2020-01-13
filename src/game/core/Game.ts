import { Application, loaders, ticker } from 'pixi.js';
const { pixelRatio, windowWidth, windowHeight } = wx.getSystemInfoSync();
import { GameConfiguration } from '@/config/game.conf';
import { Observable, fromEvent } from 'rxjs';
import { Scene } from './Scene';
import { Store } from './Store';
import '@/utils/patch';
import { Camp } from './base/Camp';

/**
 * 游戏类
 */
interface GameObservable {
  create$: Observable<boolean>;
  start$: Observable<boolean>;
  stop$: Observable<boolean>;
  pause$: Observable<boolean>;
  destory$: Observable<boolean>;
  win$: Observable<boolean>;
  fail$: Observable<boolean>;
}

export class Game {
  private static instance = new Game();
  private configuration: GameConfiguration;
  private scenes: Scene[];
  private camps: Camp[];
  private stores: Store;
  private currentScene: Scene;
  private _application: Application;
  private _ticker: ticker.Ticker;
  private _loader: loaders.Loader;
  public $: GameObservable;

  static getInstance(): Game {
    return Game.instance;
  }

  private constructor() {
    this.init();
  }

  private init(): void {
    this._application = new PIXI.Application({
      width: windowWidth * pixelRatio,
      height: windowHeight * pixelRatio,
      backgroundColor: 0x1b1c17,
      view: canvas,
    });
    this._loader = new loaders.Loader();
    this._ticker = this._application.ticker;
    this.scenes = [];
    this.camps = [];
  }

  get application(): Application {
    return this._application;
  }

  get ticker(): ticker.Ticker {
    return this._ticker;
  }

  get loaders(): loaders.Loader {
    return this._loader;
  }

  public start(scene: Scene) {
    const app = this.application;
    this.currentScene = scene;
    this.currentScene.visible = true;
  }

  public load(...parmas: string[]) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < parmas.length; i++) {
        this._loader.add(parmas[i]);
      }
      this._loader.load(() => {
        resolve(this.loaders.resources);
      });
    });
  }

  public addCamp(camp: Camp): Game {
    if (this.getScene(camp.name)) {
      console.error(`阵营${camp.name}重复!`);
      return this;
    }
    this.camps.push(camp);
    return this;
  }

  public getCamp(name: string): Camp {
    return this.camps.find(item => item.name === name);
  }

  public addScene(scene: Scene): Game {
    console.log('添加场景', scene);
    if (this.getScene(scene.name)) {
      console.error(`场景${scene.name}重复!`);
      return this;
    }
    this.scenes.push(scene);
    return this;
  }

  public getScene(name: string): Scene {
    return this.scenes.find(item => item.name === name);
  }

  public changeSence(name: string) {
    this.currentScene.changeScene(name);
  }

  public getCurrentScene(): Scene {
    return this.currentScene;
  }
}
