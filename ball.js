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
    this.pos.add(p5.Vector.mult(this.velocity, this.speed));
  }
}
