import { Game } from '@/core/Game';
import MenuScene from '@/data/scene/MenuScene';
import MainScene from '@/data/scene/MainScene';
import loader from './loader';
import * as PIXI from 'pixi.js';
import 'pixi-projection';
import { tank } from './loader';
import '@/utils/patch';

const game = Game.getInstance();
game.load(...loader).then(item => {
  game
    .addScene(MenuScene.getInstance())
    .addScene(MainScene.getInstance())
    .start(MenuScene.getInstance());
});

export default game;
