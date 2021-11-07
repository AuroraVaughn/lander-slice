import 'phaser';
import Demo from './scenes/Demo'


class LanderSlice extends Phaser.Game{
    keys:any
    constructor(config:Phaser.Types.Core.GameConfig){
        super(config)
        this.keys = this.input.keyboard.addCapture('Q,W,E,R,T,y')
    }
    

}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo,
    physics: {
        default: 'arcade', //the physics engine the game will use
        arcade: {
          debug: false
        }
      },
};

const game = new LanderSlice(config);
