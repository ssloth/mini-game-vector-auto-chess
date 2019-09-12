const { pixelRatio, windowWidth, windowHeight } = wx.getSystemInfoSync();
import { Application, loaders, ticker } from 'pixi.js';
import { GameConfiguration } from '@/config/game.conf';
import { Observable, fromEvent } from 'rxjs';
import * as THREE from 'three';
import { Scene } from './Scene';
import { Store } from './Store';
import '@/utils/patch';

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
  private _renderer: THREE.WebGLRenderer;
  private _scenes: THREE.Scene;
  private _camera: THREE.PerspectiveCamera;
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
    this._renderer = new THREE.WebGLRenderer({
      context: canvas.getContext('webgl'),
      antialias: true,
    });
    this._renderer.setSize(windowWidth * pixelRatio, windowHeight * pixelRatio);
    this._renderer.setClearColor(0xee9999, 1);
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

  public addScene(scene: Scene): Game {
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
