import "phaser";
const KeyCodes = Phaser.Input.Keyboard.KeyCodes;
import Player from "../../objects/Player";
import { getBoxDimensionsFromObject } from "../../utils/getDimentions";
import { createBasicKeyListeners } from "../../utils/keyListeners";
export default class Demo extends Phaser.Scene {
  player: Player;
  inputKeys: any;
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("player", "assets/player.png");
    this.load.image("grass", "assets/grass01.png");
  }

  create() {
    this.add.tileSprite(0, 0, 64, 64, "grass");
    this.cameras.main.setViewport(
      ...getBoxDimensionsFromObject(this.game.canvas)
    );
    this.inputKeys = createBasicKeyListeners(this);
    this.player = new Player(this, { position: { x: 200, y: 200 } });
    this.cameras.main.setBounds(
      ...getBoxDimensionsFromObject(this.game.canvas)
    );
    this.cameras.main.startFollow(this.player, false, 0.2, 0.2);
  }
  update() {
    this.player.update();
  }

  render() {}
}
