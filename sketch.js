const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myworld, myengine;
var box1,box2;
var ground1;


function setup() {
  createCanvas(400,400);

  myengine = Engine.create();  //.world
  myworld = myengine.world;

  box1 = new BOX(200,300,50,50);
  box2= new BOX(240,100,50,100);

  ground1= new Ground(200,380,400);
  
}

function draw() {
  background("black"); 

  Engine.update(myengine);

  box1.display();
  box2.display();

  ground1.display();

}