import "phaser";
import * as PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin";
import Demo from "./scenes/Demo";

class LanderSlice extends Phaser.Game {
  keys: any;
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
    // this.keys = this.input.keyboard.addCapture("Q,W,E,R,T,y");
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  scene:[Demo],
  parent:'game-parent',
  physics: {
    default: "matter", //the physics engine the game will use
    matter: {
      debug: true,
      gravity: { y: 0 },
    },
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin, // The plugin class
        key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
        mapping: "matterCollision", // Where to store in the Scene, e.g. scene.matterCollision
      },
    ],
  },
};

const game = new LanderSlice(config);
