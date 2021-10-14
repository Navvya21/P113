function preload() {

}

function setup() {
  canvas= createCanvas(640, 480);
  canvas.position(150, 250);
  video= createCapture(VIDEO);
  video.hide();
  tint_color="";

let c = color(157,155,220);
fill(c);
  rect(25, 80, 50,380);

  rect(565, 80, 50,380);

  rect(80, 24, 481,50);

  rect(80, 408, 481,50);
c = color(205,222,241);
fill(c);
circle(50, 50, 80);
  circle(50, 50, 80);

  circle(50, 430, 80);

  circle(590, 50, 80);

  circle(590, 430, 80);
}


function draw() {
  image(video, 153, 116, 350, 255);
  tint(tint_color);}


function take_snapshot(){
    save("my_picture.png");
}