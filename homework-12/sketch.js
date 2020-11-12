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
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(400, 700);
    // get a random speed when the it starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 2);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 2);
    createCharacter(100,250);
}

function draw()
{
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
    circle(shapeX, shapeY, 30);

    // get a random speed when the it starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 7);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 6);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape is out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
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
   console.log(characterX);
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
