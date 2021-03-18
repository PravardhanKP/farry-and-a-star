var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130,520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.3;
	fairy.velocityX = 0;
	star = createSprite(650,30,option1);
	star.addImage(starImg);
	star.scale = 0.2;
	//star.x = starBody.position.x;
	//star.y = starBody.position.y;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5});
	World.add(world, starBody);
	star.velocityY = 1;

	Engine.run(engine);
	var option1={
		restitution:0.3
	  }
	  var option2={
		isStatic:true
	  }

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  rectMode(CENTER)
  drawSprites();
  

}

function keyPressed() {
	//write code here
if (keyDown(RIGHT_ARROW)){
	fairy.velocityX = 3;
}
if (keyDown(LEFT_ARROW)){
	fairy.velocityX = -3;
}

}