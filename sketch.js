var box ;
function setup() {
  createCanvas(400,400);
box = createSprite(50,160,20,50);

}

function draw() 
{
  background(30);

  if (keyDown (UP_ARROW)){
    box.y = box.y-1
  }
  if (keyDown (DOWN_ARROW)){
    box.y = box.y+1
  }

  if (keyDown (LEFT_ARROW)){
    box.x = box.x-1
  }
  if (keyDown (RIGHT_ARROW)){
    box.x = box.x+1
  }

drawSprites()
}




