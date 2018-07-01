var score = 0;
var paddle;
var ball;
var score_dom;
var paused = false;
var lastScore;
var hiScore = 0;

function setup() {
  createCanvas(900, 600);
  paddle = new Paddle(width / 2, height - 20);
  ball = new Ball(
    createVector(width / 2, height / 2),
    random(-3 * PI / 4, -PI / 4)
  );

  score_dom = createP('Score: ' + score);
  lastscore_dom = createP('Last Score: ' + lastScore);
  hiscore_dom = createP('High Score: ' + hiScore);
}

function draw() {
  background(0);
  paddle.update();
  paddle.show();
  ball.update();
  ball.show();

  ballHitsPaddle();
  ballLostOffBottom();

  score_dom.html('Score: ' + score);
  lastscore_dom.html('Last Score: ' + lastScore);
  hiscore_dom.html('High Score: ' + hiScore);
}

function ballLostOffBottom() {
  if (ball.pos.y > height) {
    ball.reset();
    paddle.reset();
    lastScore = score;
    if (score > hiScore) hiScore = score;
    score = 0;
  }
}

function ballHitsPaddle() {
  if (ball.pos.y < height - 30 || ball.pos.y > height - 10) {
    return;
  }
  if (ball.pos.x > paddle.x - 75 & ball.pos.x < paddle.x + 75) {
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
