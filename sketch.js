var score = 0;
var paddle;
var ball;
var score_dom;
var paused = false;

function setup() {
  createCanvas(900, 600);
  paddle = new Paddle(width / 2, height - 20);
  ball = new Ball(
    createVector(width / 2, height / 2),
    random(-3 * PI / 4, -PI / 4)
  );

  score_dom = createP('Score: ' + score);
}

function draw() {
  background(0);
  paddle.update();
  paddle.show();
  ball.update();
  ball.show();

  ballHitsPaddle(ball, paddle);

  score_dom.html('Score: ' + score);
}

function ballHitsPaddle(ball, paddle) {
  if (ball.pos.y < height - 30) {
    return;
  }
  if (ball.pos.x < paddle.x - 75) {
    console.log('Missed paddle on left');
  } else if (ball.pos.x > paddle.x + 75) {
    console.log('Missed paddle on right');
  } else {
    var hitPos = ball.pos.x - paddle.x;
    ball.velocity.x += map(hitPos, -75, 75, -1, 1, true);
    ball.velocity.y *= -1;
    ball.velocity.normalize();
    score++;
    ball.speed += 0.5;
  }
}

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
