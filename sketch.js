
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var plain1;
var stone1;
var iron1;
var rubber1;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     hammer1 = new hammer(100, 100);
	 plain1 = new plain(600, 690, 1200, 20);
	 stone1 = new stone(1000, 300);
   iron1 = new iron(700, 300);
   rubber1 = new rubber(300, 300);
   sand1 = new sand(400, 300);
   sand2 = new sand(410, 300);
   sand3 = new sand(420, 300);
   sand4 = new sand(430, 300);
   sand5 = new sand(440, 300);
   sand6 = new sand(450, 300);
   sand7 = new sand(460, 300);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  hammer1.display();
  plain1.display();
  stone1.display();
  iron1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  drawSprites();
 
}



