import { getBasicKeyListeners, IKeyListeners } from "../../utils/keyListeners";

export default class Player extends Phaser.Physics.Matter.Sprite {
  commands: IKeyListeners;
  targetDirection: number;
  ROTATION_SPEED = 1 * Math.PI;

  canStep = false;
  STEP_THRUST = 1;
  RUN_MAINTAIN = 0.0004;
  WALK_MAINTAIN = 0.0002;
  constructor(
    public scene: Phaser.Scene,
    matterConfig: Phaser.Types.Physics.Matter.MatterBodyConfig
  ) {
    super(
      scene.matter.world,
      matterConfig.position.x,
      matterConfig.position.y,
      "player",
      0,
      matterConfig
    );
    this.scale = .5
    this.body.mass = 0.2;
    this.scene.add.existing(this);
    this.commands = getBasicKeyListeners();
    this.commands.step.on("down", this.pressStep);
    this.commands.step.on("press", this.holdStep);
    this.commands.step.on("up", this.releaseStep);

    this.scene.input.on("pointermove", this.rotate);
    this.scene.input.mouse.onMouseDown = this.attack;
 
  }
  get rotationSpeed (){
    if(Math.abs(this.targetDirection)< .8){
      return 1.8 * Math.PI;
    }else if(Math.abs(this.targetDirection) > 1.9){
      return 1.8 * Math.PI;
    }
    return 1.5 * Math.PI;
  }
  rotate = (event: MouseEvent) => {
    this.targetDirection = Phaser.Math.Angle.BetweenPoints(this, event);
    console.log("targetDirection->", this.targetDirection)
  };

  attack = (event: MouseEvent) => {
    console.log(event);
  };
  pressStep = (event: KeyboardEvent) => {
    this.thrust(0.0003);
  };
  holdStep = (event: KeyboardEvent) => {
    console.log(event, this.scene);
  };
  releaseStep = (event: KeyboardEvent) => {
    console.log(event, this.scene);
  };
  create() {}
  update() {

    
    
    
    if (!Phaser.Math.Fuzzy.Equal(this.rotation, this.targetDirection)) {
      
      this.rotation = Phaser.Math.Angle.RotateTo(
        this.rotation,
        this.targetDirection,
        this.rotationSpeed * 0.004
      );
    }
  }

  activelyMoving(){
   
  }
  run(){
    this.thrust(this.RUN_MAINTAIN);
  }

  walk(){
    this.thrust(this.WALK_MAINTAIN);

  }
}
