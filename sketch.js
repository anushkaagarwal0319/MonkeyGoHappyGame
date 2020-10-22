
var monkey , monkey_running
var ground, groundImage
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime = 0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
//create monkey
  monkey = createSprite(80,315,20, 20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale= 0.1

//create ground
  ground = createSprite(400, 350, 900, 10);
  ground.shapeColor = "pink";
  //going to do this for now as the scrolling ground isn't working
  console.log(ground.x)
  
//create food and obstacle groups
  foodGroup = createGroup();
  obstacleGroup = createGroup();

}


function draw() {

background ("black");
  
//display survival time
  stroke ("white");
  textFont('Georgia')
  textSize(20);
  fill("white");
  survivalTime =Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME:" + survivalTime, 100, 50);
  
  
  
//make monkey collide with the ground
  monkey.collide(ground)
  
//jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -16;
    }
    
//add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
//call food function
  food();
  
//call obstacle function
  obstacles();
  

drawSprites();

}



function food(){
  if(World.frameCount % 80 === 0){
    banana = createSprite(400, 200, 20, 20);
    banana.addImage(bananaImage);
    
    //random y position
    banana.y =Math.round(random(120,200));
    
    //set velocity and lifetime
    banana.velocityX = -(6);
    banana.setLifetime = 50
    
    //set scale
    banana.scale= 0.1
    
    //add banana to food group
    foodGroup.add(banana)
    
    
  }

}

function obstacles(){
  if(World.frameCount % 300 === 0){
    obstacle = createSprite(400, 310, 20, 20);
    obstacle.addImage(obstacleImage);
    
    //set velocity and lifetime
    obstacle.velocityX = -(6);
    obstacle.setLifetime = 50
    
    //set scale
    obstacle.scale= 0.2
    
    //add obstacle to obstacle group
    obstacleGroup.add(obstacle)
    
    
  }

}






