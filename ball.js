class Ball {
  constructor(pos, angle) {
    this.pos = pos;
    this.velocity = p5.Vector.fromAngle(angle);
    this.speed = 4;
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }

  update() {
    if (this.pos.y < 0) {
      this.velocity.y *= -1;
    }
    if (this.pos.x < 0 || this.pos.x > width) {
      this.velocity.x *= -1;
    }
    this.pos.add(p5.Vector.mult(this.velocity, this.speed));
  }
}
