
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const Body = Matter.Body;
var engine,world;
var boyImage,boy
var stone
var ground
var tree
var mango,mango2,mango3,mango4,mango5,mango6,mango7
var slingShot
function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	boy = createSprite(150,530);
	boy.addImage(boyImage);
	boy.scale= 0.1

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango = new Mango(1050,100,30)
	mango2 = new Mango(1200,150,30)
	mango3 = new Mango(1050,250,30)
	mango4 = new Mango(1200,225,30)
	mango5 = new Mango(900,200,30)
	mango6 = new Mango(1150,250,30)
	mango7 = new Mango(1000,200,30)
	stone = new Stone(100,480,30);
	slingShot = new SlingShot(stone.body,{x:110,y:490})
	ground = new Ground(width/2,600,width,20)
	tree = new Tree (1050,610);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  ground.display();
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  slingShot.display();
  drawSprites();
  stone.display();
  detectollision(stone,mango);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingShot.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	slingShot.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }