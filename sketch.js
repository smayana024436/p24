const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperWaste;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperWaste = new Paper(650,200);

	
  
}


function draw() {
  background(0);
  Engine.update(engine);

  paperWaste.display();

 
}
