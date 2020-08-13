	var ball;
	var ground;
	var bucket1;
	var bucket2;

	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bucket1 = new Bucket(500,268,70,5);

	bucket2 = new Bucket(700,268,70,5);

	ball = new Ball(200,120,50,50);

	ground = new Ground(319,300,100000,5);	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	Engine.update(engine);
	strokeWeight(4);
  bucket1.display();
  bucket2.display();
  ball.display();
  ground.display();
 
}

function keyPressed(){
    if(keyCode === 32){
    ball.velocityX = 10;
    }
}