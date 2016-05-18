var horRectStartX;
var horRectStartY;
var horRectWidth;
var horRectHeight;

// The setup function runs once
function setup() {
  
  createCanvas(800, 600);
  frameRate(10);
  stroke(0); 
  fill(150);
  horRectStartX = 0;
  horRectStartY = 350;
  horRectWidth = width + 100;
  horRectHeight = 40;
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
  background(0);

  rect(horRectStartX,horRectStartY,horRectWidth,horRectHeight);

  horRectStartX = horRectStartX + 20;
  console.log(horRectStartX)


  var c = color(150, 204, 255);  // Define color 'c'
  fill(c);  // Use color variable 'c' as fill color
  noStroke();  // Don't draw a stroke around shapes
  rect(30, 20, 55, 55);  // Draw rectangle
}

function mousePressed() {
  var d = color(255);
  fill(d);
  rect(300, 20, 500, 55);
}