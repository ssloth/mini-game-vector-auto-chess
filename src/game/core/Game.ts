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
  private configuration: GameConfiguration;
  private scene: Scene;
  private store: Store;
  private application: Application;
  private ticker: ticker.Ticker;
  private loader: loaders.Loader;
  public $: GameObservable;

  constructor(configuration: GameConfiguration) {
    this.init();
  }

  private init(): void {
    this.application = new Application({ backgroundColor: 0x1b1c17, view: canvas });
    this.loader = new loaders.Loader();
    this.ticker = this.application.ticker;
  }

  private start() {
    const app = this.application;
  }

  public load(...parmas: string[]) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < parmas.length; i++) {
        this.loader.add(parmas[i]);
      }
      this.loader.load(() => {
        resolve(this.loader);
        this.start();
      });
    });
  }
}
