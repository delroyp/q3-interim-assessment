var x = 0;
var y = 0;

function setup(){
    createCanvas (600,400);
}

function draw(){
   background(0);
   
   fill(2, 51, 247)
   ellipse(mouseX, mouseY, 100, 100);
   
   fill(168, 3, 155)
   x = 200;
   y++;
   rect(x, y, 100, height);
   
   stroke(255, 0, 0)
   line(100, 50, 500, 50);
   
   if(mouseIsPressed){
       background(3, 165, 138)
   }
}