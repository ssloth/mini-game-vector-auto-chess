import { Application, loaders, ticker, Sprite } from 'pixi.js';
import { GameConfiguration } from '@/config/game.conf';
import { Observable, fromEvent } from 'rxjs';
import { Scene } from './Scene';
import { Store } from './Store';
import { tank, shape } from '@/bootstrap/loader';

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
  private instance = Game.instance;
  private configuration: GameConfiguration;
  private scene: Scene;
  private store: Store;
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
    this._application = new Application({ backgroundColor: 0x1b1c17, view: canvas });
    this._loader = new loaders.Loader();
    this._ticker = this._application.ticker;
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

  private start() {
    const app = this.application;
  }

  public load(...parmas: string[]) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < parmas.length; i++) {
        this._loader.add(parmas[i]);
      }
      this._loader.load(() => {
        resolve(this._loader);
        this.start();
      });
    });
  }
}
