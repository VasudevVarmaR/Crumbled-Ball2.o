
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var wall1,wall2,wall3;
var rightSide,leftSide,bottomide;
var Dbin;
var wallGroup;

function preload()
{
  Dbin=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground(600,height,1200,70);

  //rightSide
   wall1 = new Bin(725,420,20,98);

  //bottomSide 
   wall2 = new Bin(685,460,68,20);

  //leftSide
   wall3 = new Bin(657,420,20,98);

   paperObject =new Paper(100,445,40);
   

   Engine.run(engine);
   
   keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paperObject.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display(); 
  imageMode(CENTER);
  image(Dbin,692,420,100,100);
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-70});
  }
}



