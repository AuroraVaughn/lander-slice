import { getBasicKeyListeners, IKeyListeners } from "../../utils/keyListeners";

export default class Player extends Phaser.Physics.Matter.Sprite {
  commands: IKeyListeners;
  targetDirection: number;
  ROTATION_SPEED = 1 * Math.PI;
  get rotationSpeed (){
    if(Math.abs(this.targetDirection)< .8){
      return 3 * Math.PI;
    }
    return 1 * Math.PI;
  }
  canStep = false;
  STEP_THRUST = 0.0003;
  RUN_MAINTAIN = 0.00004;
  WALK_MAINTAIN = 0.00002;
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
    this.body.mass = 0.04;
    this.scene.add.existing(this);
    this.commands = getBasicKeyListeners();
    this.commands.step.on("down", this.pressStep);
    this.commands.step.on("press", this.holdStep);
    this.commands.step.on("up", this.releaseStep);

    this.scene.input.on("pointermove", this.rotate);
    this.scene.input.mouse.onMouseDown = this.attack;
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

    console.log(this);
  };
  holdStep = (event: KeyboardEvent) => {
    console.log(event, this.scene);
  };
  releaseStep = (event: KeyboardEvent) => {
    console.log(event, this.scene);
  };
  create() {}
  update() {
    if(this.commands.step.getDuration() > 500){
      this.activelyMoving()
    }
    
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
