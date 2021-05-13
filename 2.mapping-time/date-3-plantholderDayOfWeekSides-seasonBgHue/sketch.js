
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
  var s = now.season
  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  if (s==1){
    background('mistyrose')
  }
  else if(s==2){
    background('navajoWhite')
  }
  else if(s==3){
    background('tan')
  }
  else if(s==4){
    background('lightcyan')
  }
  // choose the spacing parameters for the grid

  push();
  var wd= now.weekday
  translate(width/2,height/2)
  stroke('darkSalmon')
  fill('lightSalmon');
  strokeWeight(5)
  polygon(0, 0, 50, wd+1);
  pop();

  push()
  translate(width/2,height/2)
  rotate(-PI/2)
  let hourEnd = map(z,0,24,0,2*PI)
  let minEnd = map(y,0,60,0,2*PI)
  let secEnd = map(x,0,60,0,2*PI)
  push()
  rotate(secEnd)
  stroke('paleGreen')
  strokeWeight(5)
  line (0,0,100,0)
  pop()
  push()
  rotate(hourEnd)
  stroke('darkSeaGreen')
  strokeWeight(15)
  line (0,0,200,0)
  pop()
  push()
  rotate(minEnd)
  stroke('darkGreen')
  strokeWeight(10)
  line (0,0,150,0)
  pop()
  pop()




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
