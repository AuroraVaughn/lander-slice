import "phaser";
import { LEFT } from "phaser";
const KeyCodes = Phaser.Input.Keyboard.KeyCodes;
export const KeysUsed = [KeyCodes.SPACE, KeyCodes.A, KeyCodes.D];

export interface IKeyListeners<T=Phaser.Input.Keyboard.Key> {
  step: T;
  left: T;
  right: T;
}



let keys:IKeyListeners
export const createBasicKeyListeners = (scene: Phaser.Scene):IKeyListeners => {

  keys = scene.input.keyboard.addKeys({
    step: KeyCodes.SPACE,
    left: KeyCodes.A,
    right: KeyCodes.D,
  }, true) as IKeyListeners;

 
  return keys
};

export const getBasicKeyListeners=()=> keys

