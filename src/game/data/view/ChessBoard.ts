import * as THREE from 'three';
import { mtl, obj } from '@/bootstrap/loader';
import { Game } from '@/core/Game';
import { BOARD } from '@/config/game.conf';
import { rect } from '@/bootstrap/loader';
import { Player } from '@/core/Player';
import { Scene } from '@/core/Scene';
import { drawPolygon } from '../../utils/draw';

/**
 * 战斗棋盘背景 为正方形状,
 * 有 9x9 大格,每大格有 3x3 小格
 * 每个 战斗单位 初始化时,一定在 9*9 大格上
 */
export default class ChessBoard {
  private player: Player;
  private scene: Scene;
  constructor(scene: Scene, player: Player) {
    this.player = player;
    this.scene = scene;
    this.create();
  }

  create() {
    const axes = new THREE.AxesHelper(50);
    this.scene.add(axes);
    const game = Game.getInstance();
    const GridSize = BOARD.SIZE / BOARD.GARD_COUNT;
    const trans = BOARD.SIZE * 1.01;
    const offsetY = 5;
    const geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-500, 0, 0));
    geometry.vertices.push(new THREE.Vector3(500, 0, 0));

    const drawPalne = (x, y, z) => {
      const planeGeometry = new THREE.PlaneGeometry(GridSize, GridSize);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x1f272e,
      });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.position.set(x, y, z);
      this.scene.add(plane);
    };

    const drawLine = i => {
      let line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x004d3e }));
      line.position.y += i * 2 - 100;
      this.scene.add(line);
      line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x004d3e }));
      line.position.x += i * 2 - 100;
      line.rotation.z = (90 * Math.PI) / 180;
      this.scene.add(line);
    };

    for (let i = 0; i <= 100; i++) drawLine(i);

    for (let i = 0; i < BOARD.GARD_COUNT; i++) {
      for (let j = 0; j < BOARD.GARD_COUNT; j++) {
        const x = i * GridSize;
        const y = j * GridSize;
        drawPalne(x - (trans - GridSize) / 2, y - (trans - GridSize) / 2 + offsetY, 1);
      }
    }
  }

  ready() {}

  fighting() {}

  end() {}
}
