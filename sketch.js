const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8;
var boxImage;
var ground;
var ball, ballImage;
var slingShot;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700,350,70,70);
  box2 = new Box(910,350,70,70);
  box3 = new Box(700,280,70,70);
  box4 = new Box(910,280,70,70);
  box5 = new Box(770,280,70,70);
  box6 = new Box(840,280,70,70);
  box7 = new Box(770,350,70,70);
  box8 = new Box(840,350,70,70);

  ball = new Ball(400,200,50,50);

  ground = new Ground(600,height,1200,20);

  slingShot = new SlingShot(ball.body,{x:400,y:200});
}

function draw() {
  background("white");
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  
  ground.display();

  ball.display();

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
} 