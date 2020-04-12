


function setup() {
  createCanvas(1200,800);
  moving=createSprite(600,200,40,40);
  moving.shapeColor="blue";
  
 
 
}

function draw() {
 background(225,30,223); 
 moving.x=World.mouseX;
 moving.y=World.mouseY; 

 if (moving.x>600||moving.y>200) {
   background(220,139,100);
   moving.shapeColor="green";
 }
 
 if (moving.x>1000||moving.y<200) {
   background(230,10,250);
   moving.shapeColor="red";
  
 }
 if(moving.x>650||moving.y<150){
   background(100,20,30);
   moving.shapeColor="yellow";
 }
 moving.display();
}