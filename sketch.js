var iss, canvas, spacecraft
var hasDocked= false

function preload(){
  issImg= loadImage("Images/iss.png")
  spaceImg = loadImage("Images/spacebg.jpg")
  
  spacecraft1Img = loadAnimation("Images/spacecraft1.png")
  spacecraft2Img = loadAnimation("Images/spacecraft2.png")
  spacecraft3Img = loadAnimation("Images/spacecraft3.png")
  spacecraft4Img = loadAnimation("Images/spacecraft4.png") 
}
function setup() {
  canvas=createCanvas(1535,720);
 
  iss= createSprite(700, 300, 30, 30);
  iss.addImage(issImg)
  iss.scale= 1.3

  issdock= createSprite(610, 340, 5, 5)
  issdock.visible=false

  spacecraft= createSprite(random(15, 1520),550);
  spacecraft.addAnimation("still",spacecraft1Img)
  spacecraft.scale=0.3
  
}

function draw() {
  background(spaceImg); 
  if(!hasDocked){

    if(keyDown(UP_ARROW)){
      spacecraft.addAnimation("up",spacecraft2Img)
      spacecraft.changeAnimation("up")
      spacecraft.y= spacecraft.y-2;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addAnimation("down",spacecraft2Img)
      spacecraft.changeAnimation("down")
      spacecraft.y= spacecraft.y+2;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addAnimation("right",spacecraft4Img)
      spacecraft.changeAnimation("right")
      spacecraft.x= spacecraft.x+2;
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addAnimation("left",spacecraft3Img)
      spacecraft.changeAnimation("left")
      spacecraft.x= spacecraft.x-2;


    }
    
  }
  if(spacecraft.isTouching(issdock)){
    hasDocked=true;
    fill("White")
    textSize(30)
    text("Docking Successful!", 660, 660);
  }
  drawSprites();
}

