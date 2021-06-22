var car,wall;
var speed,weight;
var  deformation;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60, height/2);
  car.velocityX=speed;

  deformation = 0.5 * speed*weight*speed/22500;
  if (deformation <100)
    car.shapeColor="green"
  else if (deformation <180)
    car.shapeColor="red"
  else
    car.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  drawSprites();
}