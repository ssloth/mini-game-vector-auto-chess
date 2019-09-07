import { TextStyle, Text, Graphics, Rectangle } from 'pixi.js';
import { Scene } from '@/core/Scene';
import { Game } from '@/core/Game';

const style = new TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fill: 0x09a2fc,
});

export default class MenuScene extends Scene {
  public onCreate(): void {
    const { height } = Game.getInstance().application.view;
    this.drawMenuItem('单机模式', height * 0.3).on('tap', () => {});
    this.drawMenuItem('多人对战', height * 0.4).addListener('click', () => {});
    this.drawMenuItem('联盟模式', height * 0.5).addListener('click', () => {});
    this.drawMenuItem('退出', height * 0.6).addListener('click', () => {});

    setTimeout(() => {
      this.changeScene('main');
    }, 1000);
  }

  public onShow(): void {}
  public onHidden(): void {}

  private drawMenuItem(title: string, top: number): Graphics {
    const { width } = Game.getInstance().application.view;
    const rect = new Graphics();
    const text = new Text(title, style);
    rect.interactive = true;
    rect.buttonMode = true;
    const rectWidth = 500;
    const rectHeight = 100;
    rect.lineStyle(3, 0x09a2fc);
    rect.interactive = true;
    // rect.hitArea = new Rectangle((width - rectWidth) / 2, top, rectWidth, rectHeight);
    rect.drawRect((width - rectWidth) / 2, top, rectWidth, rectHeight);
    rect.endFill();
    text.position.set((width - text.width) / 2, top + 25);
    rect.addChild(text);
    this.addChild(rect);
    return rect;
  }
}
