import "phaser";
const KeyCodes = Phaser.Input.Keyboard.KeyCodes
import Player from "../../objects/Player";
import {createBasicKeyListeners} from '../../utils/keyListeners'
export default class Demo extends Phaser.Scene {
  player: Player;
  inputKeys:any
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("player", "assets/player.png");
  }

  create() {
    this.inputKeys = createBasicKeyListeners(this)
    this.player = new Player(this, { position: { x: 32, y: 32 } });
 
   
  }
  update(){
  this.player.update()

  }
}
