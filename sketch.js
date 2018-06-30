function setup() {
  createCanvas(900, 600);
  paddle = new Paddle(width/2, height-20);
}

function draw() {
  background(0);
  paddle.update();
  paddle.show();
}

class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.direction = 0;
  }

  show() {
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, 150, 20);
  }

  update() {
    this.x += this.direction * this.speed;
  }

  moveLeft() {
    this.direction = -1;
  }

  moveRight() {
    this.direction = 1;
  }

  stop() {
    this.direction = 0;
  }
}
