import "phaser";
import Player from "../../objects/Player";

export default class Demo extends Phaser.Scene {
  player: Player;

  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("player", "assets/player.png");
  }

  create() {
    this.player = new Player(this, { spawnLocation: { x: 32, y: 32 } });
console.log(this.game)
  }
  update(){
    

  }
}
