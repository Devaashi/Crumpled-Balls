
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var classroomBg,classroom;
var paperBallImg,paperBall;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload(){
	//classroomBg.loadImage('classroomBackground.png');
	//paperBallImg.loadImage('crumpledPaperBall.png');
}

function setup() {
	createCanvas(1500, 720);


	engine = Engine.create();
	world = engine.world;

	
	paperBall = new Paperball(70, 680);
	ground = new Ground(500,700,2000,20);
	dustbin1 = new Dustbin(870,680,125,PI*28.7);
	dustbin2 = new Dustbin(785,588,170,-PI*3);
	dustbin3 = new Dustbin(955,589,170,PI*3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperBall.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:105,y:-105});
	   
	 }
   
   }
   



