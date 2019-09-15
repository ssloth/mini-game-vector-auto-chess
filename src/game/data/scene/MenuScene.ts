import * as THREE from 'three';
import { Scene } from '@/core/Scene';
import { Game } from '@/core/Game';

export default class MenuScene extends Scene {
  public onCreate(): void {
    const height = 1000;
    this.drawMenuItem('单机模式', height * 0.3);
    // this.drawMenuItem('多人对战', height * 0.4).addListener('click', () => {});
    // this.drawMenuItem('联盟模式', height * 0.5).addListener('click', () => {});
    // this.drawMenuItem('退出', height * 0.6).addListener('click', () => {});

    setTimeout(() => {
      this.changeScene('main');
    }, 1000);
  }

  public onShow(): void {}
  public onHidden(): void {}

  private drawMenuItem(title: string, top: number) {}
}
