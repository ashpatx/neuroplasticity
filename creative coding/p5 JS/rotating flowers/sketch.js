function setup() {
  createCanvas(800, 650);
}

function draw() {
  //Gradient color based on mouseY
  let gradientColor = lerpColor(color(0), color(255), mouseY / height);

  background(gradientColor);

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 5; i++) {
      //Draw flower with rotation based on mouse position
      drawFlower(100 + i * 150, 100 + j * 150);
    }
  }
}

function drawFlower(x, y) {
  //Calculate angle between flower position and mouse position
  let angle = atan2(mouseY - y, mouseX - x);

  push(); //Save the current transformation state
  translate(x, y);
  rotate(angle);
  fill(60, 100, 125, 100); //Flower color
  noStroke();

  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
    rotate(PI / 5);
  }

  pop(); //Restore the previous transformation state
}
