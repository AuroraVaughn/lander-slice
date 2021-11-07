export interface IPlayerConfig {
  spawnLocation: ICoor;
}

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(public scene: Phaser.Scene, { spawnLocation }: IPlayerConfig) {
    super(scene, spawnLocation.x, spawnLocation.y, "player");

    console.log("constructor", this);

    this.scene.add.existing(this);
    
  }
 

}
 