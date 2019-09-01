/**
 * 游戏基础的精灵类
 */
export default class Sprite {
  constructor() {}

  /**
   * 简单的碰撞检测定义：
   * 另一个精灵的中心点处于本精灵所在的矩形内即可
   * @param{Sprite} sp: Sptite的实例
   */
  public isCollideWith(sp: Sprite): boolean {
    // let spX = sp.x + sp.getW / 2;
    // let spY = sp.y + sp.height / 2;

    // if (!this.visible || !sp.visible) return false;

    // return !!(
    //   spX >= this.x &&
    //   spX <= this.x + this.width &&
    //   spY >= this.y &&
    //   spY <= this.y + this.height
    // );
    return true;
  }
}
