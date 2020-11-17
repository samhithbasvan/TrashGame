//constraints
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables
let paperObject,dustBin;

let ground;

function setup() 
{
	createCanvas(1200, 800);

	//creating the Engine 
	engine = Engine.create();
	world = engine.world;

	//Ground
	ground = createSprite(600,550,10000,10);
	ground.shapeColor = "red";

	paperObject = new Paper(20,580,4);
	DustBin = new DustBin(690,540,200,200, 180);
	 
	Engine.run(engine);
  
}

function draw() 
{
//    rectMode(CENTER);
   background("blue");
  
  Engine.update(engine);

  //displaying
  paperObject.display();
  DustBin.display();
 
   drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}