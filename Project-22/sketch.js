var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line1,line2,line3;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX = 5

	helicopterSprite=createSprite(0,200,10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 5

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	line1 = new Box(300,650,200,20,{isStatic:true});
	line2 = new Box(200,630,20,75,{isStatic:true});
	line3 = new Box(400,630,20,75,{isStatic:true});

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
 

	packageSprite.y= packageBody.position.y 
  
	line1.display();
	line2.display();
	line3.display();
	drawSprites();
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    packageSprite.velocityX = 0
  }
}



