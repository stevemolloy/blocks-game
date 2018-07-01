function setup() {
  createCanvas(900, 600);
  paddle = new Paddle(width / 2, height - 20);
  ball = new Ball(
    createVector(width / 2, height / 2),
    0
  );
}

function draw() {
  background(0);
  paddle.update();
  paddle.show();
  ball.update();
  ball.show();
function togglePause() {
  if (paused) {
    paused = false;
    loop();
  } else {
    paused = true;
    noLoop();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    paddle.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    paddle.moveRight();
  } else if (key === 'p' || key === 'P') {
    togglePause();
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW & paddle.direction === -1) {
    paddle.stop();
  }
  if (keyCode === RIGHT_ARROW & paddle.direction === 1) {
    paddle.stop();
  }
}
