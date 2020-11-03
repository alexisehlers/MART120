var circleX = 100;
var circleY = 200;
var circleDirection = 2;
var xspeed = 1

var x = 1
var y = 591

var rectX = 150
var rectY = 190
var rectDirection = 4;
var yspeed =3;

var diameter = 50;
var movement = 13;
var size = 15;
var count = 0;
var sizeDirection = 2;

 // this function is called only once
function setup()
{
    frameRate (60);
    createCanvas(500, 600);
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
   background(0, 255, 255);
   textSize(20);
   text("X: " + mouseX,100,200 );
   text("Y: " + mouseY,100,220 );

   fill(255, 0, 0);
   circle(circleX, circleY, 50);
   fill(0);
   circle(circleX,circleY,10);
   circleX+=circleDirection + xspeed
   if(circleX >= 400 || circleX <= 50)
     {
       circleDirection *= -1;
     }

   fill(0, 51, 0);
   rect(200, rectY, 130, 150);
   fill(0);
   rect(100, rectY, 75, 60);
   rectY+=rectDirection + yspeed
   if(rectY >= 400 || rectY <= 50)
     {
       rectDirection *= -1;
     }

  fill(0);
    circle(frameCount,frameCount,25);
    if(frameCount >= 500 || frameCount <= 0)
    {
       movement *= -1;
    }

     frameCount += movement;

  //hands
  fill(0, 212, 0);
  triangle(104, 308, 108, 263, 143, 279);
  triangle(393, 320, 351, 299, 397, 268);


  // head
  fill(255, 204, 0);
  circle(250,100,175);

  // eyes
  strokeWeight(15);
  fill(0);
  point(220,75);
  point(265,75);

  // mouth
 fill(0)
 circle(240,130,15)

  // body
  fill('#fae');
  rect(170,200,150,200);

  //arms
  fill(0)
  line(172, 200, 130, 277);
  line(320, 206, 368,280);

  //feet
  fill(0)
  circle(218, 422, 30);
  circle(277, 423, 30);

  //hair
  fill(0);
  bezier(211, 20, 50, 50, 150, 150, 105, 139)
  circle(205, 22, 15)

  fill(15,80,300);
  textSize(size);
  size+= sizeDirection;
  count++;
  if (count > 5)
  { sizeDirection *=-1;
    count = 0;
  }
  text("Alexis Ehlers",250,500 );

}
