
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
  textFont('Helvetica, Georgia, Sans-Serif');
}

function draw() {
  translate(width / 2, height / 2);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    i,
    v,
    t;

  

  // Draw clock
  fill(255);
  stroke(0);
  strokeWeight(4);
  ellipse(width/2, height/2, diameter);

background(255, 255, 255);
  var diameter = 0;
  //set diameter to the smallest dimension
  if (width > height) {
    diameter = height;
  } else {
    diameter = width;
  }

  // Minute Markers
  fill(0);
  strokeWeight(1);
  for (i = 0; i < 60; i++) {
    v = p5.Vector.fromAngle((i + 1) / 60.0 * TAU - HALF_PI);
    v.mult(210);
    if (i % 5 == 4) {
      ellipse(v.x, v.y, 5, 5);
    } else {
      ellipse(v.x, v.y, 1, 1);
    }
  }

  // Numbers
  textSize(36);
  fill(0);
  noStroke()
  for (i = 0; i < 12; i++) {
    v = p5.Vector.fromAngle((i + 1) / 12.0 * TAU - HALF_PI);
    v.mult(180);
    text(i + 1, v.x, v.y);
  }


  // Hour hand
  stroke(0);
  strokeWeight(4);
  t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(127);
  line(0, 0, v.x, v.y);

  // Minute hand
  strokeWeight(2);
  t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(205);
  line(0, 0, v.x, v.y);

  // Second hand
  stroke(255, 0, 0);
  strokeWeight(1);
  t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(210);
  line(0, 0, v.x, v.y);

  // Center cap
  fill(0);
  stroke(0);
  noStroke();
  ellipse(0, 0, 20, 20);

  resetMatrix();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
