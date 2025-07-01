var bello=0;
var cnv;

function centerCanvas(){
  var x = (windowWidth-500)/2;
 
  cnv.position(x);
}

//The setup function only happens once
function setup() {
cnv= createCanvas(500, 500); //create a 500px X 500px canvas
centerCanvas(); 
}

function windowResized() {
  centerCanvas();
}

//The draw function happens over and over again
function draw() {
  background(133,240,random(0,250)); 
  //an RGB color for the canvas' background
  //circle
  stroke(130,30,160); // an RGB color for the circle's border
  strokeWeight(0);
  fill(190,123,50,130); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,40,150); // center of canvas, 20px dia
  strokeWeight(10);
  stroke(230,230,70);
  fill(mouseX,34,69);
  rect(random(0,200),random(height),bello,bello);
  
  stroke(210,145,145);
  line(bello,20,400,bello);
  strokeWeight(2);
  triangle(90,bello,290,250,340,485);
  fill(145,200,210);
  textSize(100);
  textFont('Impact');
  text('Hello',200,100);




}

function mousePressed (){
  if (bello>=200)
{bello=0;
} else {
bello=bello+10;
}
  

}
