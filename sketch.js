var movingRect, fixedRect;

var sprite1, sprite2;


function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 80, 50);
  fixedRect= createSprite(600, 200, 50, 80);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect.debug=true;

  sprite1= createSprite(200,200,50,50);
  sprite1.shapeColor="green";
  sprite2= createSprite(300,200,50,50);
  sprite2.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;





call(movingRect,sprite1);
call(movingRect,sprite2);
  drawSprites();

}
