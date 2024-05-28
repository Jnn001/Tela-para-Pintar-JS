let r, g, b, x, y, i;
function setup() {
  createCanvas(400, 400);
  background("lightgrey");
  r=0;
  b=180;
  g=170
  x=0;
  
  textFont("Arial");
  textSize(25);
  textAlign(CENTER);
  fill(r,g,b);
  stroke(r,g,b);
}

function draw() {
  text("Aperte qualquer tecla\npara trocar a cor.",200,50);
  
  
  if(keyIsPressed){
    r=random(0,255);
    g=random(0,255);
    b=random(0,255);
    fill(r,g,b);
    stroke(r,g,b);
  }
  
  if(mouseIsPressed){
    circle(mouseX,mouseY,random(6,16));
    x=mouseX+random(-15,15);
    y=mouseY+random(-15,15);
    circle(x,y,random(2,6));
  }

}
