

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  loader: {
    baseURL: 'https://labs.phaser.io',
    crossOrigin: 'anonymous'
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('arrow', 'assets/sprites/longarrow-white.png');
  this.load.image('cursor', 'assets/sprites/drawcursor.png');
}

var arrow1, arrow2;
var target = 0;
var ROTATION_SPEED = 1 * Math.PI; // radians per second

function create() {
  this.add.circle(400, 300, 200, 0x222222);

  // This arrow will rotate instantly
  arrow1 = this.add.image(400, 300, 'arrow')
    .setOrigin(0, 0.5)
    .setAlpha(0.4);

  // This arrow will rotate at ROTATION_SPEED
  arrow2 = this.add.sprite(400, 300, 'arrow')
    .setOrigin(0, 0.5);

  this.input.on('pointermove', function(pointer) {
    target = Phaser.Math.Angle.BetweenPoints(arrow2, pointer);
  });
}

function update(time, delta) {
  arrow1.rotation = target;
  
  arrow2.rotation = Phaser.Math.Angle.RotateTo(
    arrow2.rotation,
    target,
    ROTATION_SPEED * 0.001 * delta
  );
}

