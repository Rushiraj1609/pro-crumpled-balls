
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;	
var world;






function setup() {
	createCanvas(1350, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,40);
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(100,400,120,120);


	Engine.run(engine);

	
    

 
  
}


function draw() {

	

  rectMode(CENTER);
  background("aqua");

    fill("red");
	stroke("black");
	strokeWeight(15);
	textSize(30);
	text("PRESS SPACE TO GET ANOTHER CHANCES",200,100);


 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  


  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:900,y:-760})

	}

	if(keyCode === 32){
		Matter.Body.setPosition(paperObject.body,{x:200,y:400});
	}
}


