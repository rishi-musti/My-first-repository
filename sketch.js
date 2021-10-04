
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("yellow");
  if (keyIsDown(RIGHT_ARROW)) {
    text("RIGHT_ARROW", 150, 150);
    background("red");
  }
}

