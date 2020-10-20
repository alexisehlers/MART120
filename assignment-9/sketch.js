function setup()
{
    createCanvas(500, 600);
}

function draw()
{
  background(0, 255, 255);

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

  triangle(30,75,58,20,86,75)
  fill(15,80,300);
  textSize(30);
  text("Alexis Ehlers",250,500 );

}
