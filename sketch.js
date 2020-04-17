var movingRect, stillRect, object1, object2;

function setup() {
  createCanvas(800,600);
  stillRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,60,50);
  object1 = createSprite(300,100,30,10);
  object2 = createSprite(300,500,10,30);
  object1.velocityY = 4
  object2.velocityY = -6
}

function draw() {
  background(0);  
  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(isTouching(movingRect,stillRect)){
    movingRect.shapeColor = 'green';
    stillRect.shapeColor = 'blue';
  }
  else{
    movingRect.shapeColor = "red";
    stillRect.shapeColor = "red";
  }
  
  bounceOff(object1,object2);
 
  drawSprites();
}
