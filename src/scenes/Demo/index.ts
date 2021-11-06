import 'phaser';
import { MovementModule } from '../../movement';

export default class Demo extends Phaser.Scene
{
    constructor (playerMovement: MovementModule)
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('player', 'assets/player.png');

    }

    create ()
    { 
        
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

        this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

        const playerIMG = this.add.image(400, 300, 'player');

        console.log(playerIMG)
    }
}