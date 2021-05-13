
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
  background(255*(x/60),255*(y/60),255*(z/24))

  stroke('white')
  strokeWeight (5)
  for(let i = 0;i<z;i++){
    line (0,(height/(z+1))*(i+1), width,(height/(z+1))*(i+1))
  }
  var yCir = 0
  strokeWeight (1)

  for(let j=0;j<y;j++){
    noFill()
    ellipse(width/2, height/2, yCir+20,yCir+20)
    yCir+=10
  }


  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)
  strokeWeight (0)
  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

}
