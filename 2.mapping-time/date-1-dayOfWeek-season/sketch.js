
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  var x = now.sec
  var y = now.min
  var z = now.hours
  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background(255)
  var s = now.season

  if (s==1){
    fill('green')
  }
  else if (s==2) {
    fill('yellow')
  }
  else if (s==3) {
    fill('orange')
  }
  else if (s==4) {
    fill('lightblue')
  }

  var dow= now.weekday
  if (dow==1){
    rect(0,0,width/7,height)
  }
  else if (dow==2){
    rect(width/7,0,width/7,height)
  }
  else if (dow==3){
    rect(width/7*2,0,width/7,height)
  }
  else if (dow==4){
    rect(width/7*3,0,width/7,height)
  }
  else if (dow==5){
    rect(width/7*4,0,width/7,height)
  }
  else if (dow==6){
    rect(width/7*5,0,width/7,height)
  }
  else if (dow==7){
    rect(width/7*6,0,width/7,height)
  }
  var hRot = 0
  var mRot = 0
  var sRot = 0
  // divide each time component by its range (to turn it into a 0-1.0 value) then
  // rotate the polygon by that percent of its max speed
  hRot = now.progress.day*360
  mRot = now.progress.hour*360
  sRot = now.progress.min*360

  background(102, 70);
  noStroke()

  /*hour*/
  push();
  translate(width/2,height/2);
  rotate(hRot);
  fill(255);
  polygon(0, 0, width/3, 5);
  pop();

  /*minute*/
  push();
  translate(width/2,height/2);
  rotate(mRot);
  fill(210);
  polygon(0, 0, width/4, 5);
  pop();

  /*second*/
  push();
  translate(width/2,height/2);
  rotate(sRot);
  fill(180);
  polygon(0, 0, width/5, 5);
  pop();

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)
  strokeWeight (0)
  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

}
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
