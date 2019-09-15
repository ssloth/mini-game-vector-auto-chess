const { pixelRatio, windowWidth, windowHeight } = wx.getSystemInfoSync();
import * as THREE from 'three';
import { GameConfiguration } from '@/config/game.conf';
import { Observable, fromEvent } from 'rxjs';
import { Scene } from './Scene';
import { Store } from './Store';
import '@/utils/patch';
import MTLLoader from 'three-mtl-loader';
import OBJLoader from 'three-obj-loader';

canvas.height = windowHeight;
canvas.width = windowWidth;

/**
 * 游戏类
 */
interface IGameObservable {
  create$: Observable<boolean>;
  start$: Observable<boolean>;
  stop$: Observable<boolean>;
  pause$: Observable<boolean>;
  destory$: Observable<boolean>;
  win$: Observable<boolean>;
  fail$: Observable<boolean>;
}

interface ISize {
  width: number;
  height: number;
}

export class Game {
  private static instance = new Game();
  private configuration: GameConfiguration;
  private _renderer: THREE.WebGLRenderer;
  private _scenes: THREE.Scene;
  private _camera: THREE.PerspectiveCamera;
  private stores: Store;
  private currentScene: Scene;
  private scenesManager: Scene[];
  private _sceneSize: ISize;
  private _mtlLoader: MTLLoader;
  private _objLoader: OBJLoader;
  // private _application: Application;
  // private _ticker: ticker.Ticker;
  public $: IGameObservable;

  static getInstance(): Game {
    return Game.instance;
  }

  get renderer(): THREE.WebGLRenderer {
    return this._renderer;
  }

  get sceneSize(): ISize {
    return this._sceneSize;
  }

  get camera(): THREE.PerspectiveCamera {
    return this._camera;
  }

  get mtlLoader(): MTLLoader {
    return this._mtlLoader;
  }

  get objLoader(): OBJLoader {
    return this._objLoader;
  }

  private constructor() {
    this.init();
  }

  private init(): void {
    this._renderer = new THREE.WebGLRenderer({
      context: canvas.getContext('webgl'),
      antialias: true,
      precision: 'highp',
    });
    const width = windowWidth * pixelRatio;
    const height = windowHeight * pixelRatio;
    this._sceneSize = { width, height };
    // console.log(width, height, windowWidth, windowHeight);
    this._renderer.setSize(windowWidth, windowHeight);
    this._renderer.shadowMapEnabled = true;
    this._renderer.setClearColor(0x232529, 1);

    this._camera = new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.1, 100);
    this._camera.position.set(0, -30, 60);
    this._camera.lookAt(0, 0, 0);

    this._mtlLoader = new MTLLoader();
    this._objLoader = new OBJLoader();
    this.scenesManager = [];

  }

  public start(scene: Scene) {
    this.currentScene = scene;
    this.currentScene.visible = true;
    this._renderer.render(scene, this._camera);
  }

  public load(...parmas: string[]) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  public addScene(scene: Scene): Game {
    if (this.getScene(scene.name)) {
      console.error(`场景${scene.name}重复!`);
      return this;
    }
    this.scenesManager.push(scene);
    return this;
  }

  public getScene(name: string): Scene {
    return this.scenesManager.find(item => item.name === name);
  }

  public changeSence(name: string) {
    this.renderer.render(this.getScene(name), this._camera);
  }

  // public getCurrentScene(): Scene {
  //   return this.currentScene;
  // }
}
