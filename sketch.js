var dot
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
function setup(){

 createCanvas(1200,400);

 dot=createSprite(100,100,100,100);
dot.velocityX=5;
 // dot.x=Worldmouse.X;

 dot.shapeColor="red"
}
function draw(){
background(0,0,0);
if(dot.x>800){

  dot.shapeColor="green";
 
  } else if(dot.x>400&&dot.x<800){
 
   dot.shapeColor="blue";
 
  }else {
 
   dot.shapeColor="red";
 
  }


drawSprites();
}