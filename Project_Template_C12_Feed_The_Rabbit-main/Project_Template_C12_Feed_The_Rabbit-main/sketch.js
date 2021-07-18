var garden; 
var rabbit;
var gardenImg; 
var rabbitImg;
var apple; 
var appleImg;
var leaf; 
var leafImg;
var appleX;
var leafX;

function preload() 
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup() 
{
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function createApples() 
{
  appleX = random(100, 300);
  apple = createSprite(appleX, 0, 50, 50);
  apple.scale = 0.125;
  apple.addImage(appleImg);
  apple.lifetime = 100;
  apple.velocityY = 4;
}

function createLeaves() 
{
  leafX = random(100, 300);
  leaf = createSprite(leafX, 0, 50, 50);
  leaf.scale = 0.125;
  leaf.addImage(leafImg);
  leaf.lifetime = 100;
  leaf.velocityY = 4;
}

function draw() 
{
  background(0);
  
  drawSprites();
  edges= createEdgeSprites();
  rabbit.x = mouseX;
  rabbit.collide(edges);

  if (frameCount % 80 === 0) 
  {
    createApples();
    createLeaves();
  }
}
