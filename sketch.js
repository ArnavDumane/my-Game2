var backgroundImg,bg
var player,playerImg;
var bullet,bulletImg;
var enemy,enemyImg;

function preload(){
 backgroundImg=loadImage("Forest1.jpg");
 playerImg = loadAnimation("p1.png","p2.png","p3.png","p4.png","p5.png","p6.png")
 bulletImg=loadImage("bullet1.png")
 enemyImg = loadImage("enemy2.png")
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400,100)
  bg.addImage(backgroundImg)
  bg.scale=0.8
  
  player= createSprite(90,270,80,80)
  player.addAnimation("running",playerImg)
  player.scale = 0.5

 
  
}

function draw() {
  background(0);
  bg.velocityX=-5
  if(bg.x===20 ){
    bg.x=750
  }

  spawnBullets();
  spawnEnemy();
  drawSprites();
  
}

function spawnBullets(){
  if(frameCount % 30===0){
  bullet = createSprite(160,240)
  bullet.addImage(bulletImg)
  bullet.scale = 0.3
  bullet.velocityX=2
  }
  
}

function spawnEnemy(){
  if(frameCount % 100===0){
 enemy=createSprite(700,270);
 enemy.addImage(enemyImg)
 enemy.velocityX=-5
  }

}