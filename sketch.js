var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background("yellow");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +6;
    background("blue")
  }

    if (keyIsDown(LEFT_ARROW)){
      box.position.x = box.position.x -7;
      background("red")
    }

    if (keyIsDown(UP_ARROW)){
      box.position.y = box.position.y -8;
      background("black")
    }

    if (keyIsDown(DOWN_ARROW)){
      box.position.y = box.position.y +9;
      background("green")
    }
  drawSprites();
}




