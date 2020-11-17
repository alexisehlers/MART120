// x and y for character
var characterX = 100;
var characterY = 100;
// defining key codes for the letters
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(400, 700);
    // get a random speed when it starts
    for (var i = 0; i < 50; i++) {
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeXs[i] = getRandomNumber(400);
    shapeYs[i] = getRandomNumber(700);
    diameters[i] = getRandomNumber(30);
  }
    createCharacter(100,250);
}

function draw() {
    background(0,80,156);
    stroke(0);
    fill(0,250,0);

    // borders function
    createBorders(20);

   //call exit message function
   createExit();

    // call character functions (createCharacter 100, 250);
    characterMovement();
    drawCharacter();

    // potential enemy
    fill(220,0,0);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];

    // check to see if the shape is out of bounds
    if (shapeXs[i] > width) {
        shapeXs[i] = 0;
    }
    if (shapeXs[i] < 0) {
        shapeXs[i] = width;
    }
    if (shapeYs[i] > height) {
        shapeYs[i] = 0;
    }
    if (shapeYs[i] < 0) {
        shapeYs[i] = height;
    }
  }
    // check to see if the character has left through the exit
    if(characterX > width && characterY > width-70)
    {
          fill(0);
          stroke(15);
          textSize(35);
          text("You Won!!!", width/3-45, height/3-40);
    }

    // create the shape based on the mouse click
    fill(220);
    circle(mouseShapeX, mouseShapeY, 25);
}
function createExit()
{
   // exit here message
   fill(0)
  text("Exit here", width-65,height-25)
}
function characterMovement()
{
  // handle the keys
  if(keyIsDown(w))
  {
      characterY -= 2;
  }
  if(keyIsDown(s))
  {
      characterY += 2;
  }
  if(keyIsDown(a))
  {
      characterX -= 2;
      console.log("movement: " + characterX);
  }
  if(keyIsDown(d))
  {
      characterX += 2;
  }
}
 function createCharacter(x,y)
 {
   characterX = x;
   characterY = y;
 }
 function drawCharacter()
{
   fill(0,0,255);
   circle(characterX,characterY,18);
 }
function createBorders(thickness)
{
    // top border
    rect(0,0,width,20);
    // left border
    rect(0,0,20,height);
    // bottom border
    rect(0, height-20,width,20);
    // right upper border
    rect(width-20,0,20,height-70);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
