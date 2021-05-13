
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 800)

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
  background('white')
  fill('red')
  ellipse((width/6)*1, (width/6)*1, 5*x, 5*x)
  ellipse((width/6)*3, (width/6)*3, 5*y, 5*y)
  ellipse((width/6)*5, (width/6)*5, 5*z, 5*z)

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

}
