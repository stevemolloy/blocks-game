class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.direction = 0;
  }

  reset() {
    this.x = width / 2;
    this.y = height - 20;
    this.direction = 0;
  }

  show() {
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, 150, 20);
  }

  update() {
    this.x += this.direction * this.speed;
    if (this.x < 0) this.x = 0;
    if (this.x > width) this.x = width;
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
