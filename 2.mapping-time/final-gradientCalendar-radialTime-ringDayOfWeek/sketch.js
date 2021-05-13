
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
  background(255)
  // choose the spacing parameters for the grid
  var colSpacing = width/7
  var rowSpacing = height/5
  var cellW = width/7
  var cellL = height/5


  // determine the layout of the grid
  var totalCells = 31
  var numColumns = 7
  var numRows = ceil(totalCells/numColumns)
  // var s = now.season
  //
  // if (s==1){
  //   let c1=color('lightpink')
  //   let c2=color('yellow')
  // }
  // else if (s==2) {
  //   let c1=color('lightblue')
  //   let c2=color('orange')
  // }
  // else if (s==3) {
  //   let c1=color('brown')
  //   let c2=color('orange')
  // }
  // else if (s==4) {
  //   let c1=color('lightblue')
  //   let c2=color('darkblue')
  // }
  let c1=color('cornsilk')
  let c2=color('magenta')
  let c3=color('magenta')
  if (s==1){
    c1=color('cornsilk')
    c2=color('magenta')
    c3=color('mediumVioletRed')
  }
  else if (s==2) {
    c1=color('gold')
    c2=color('coral')
    c3=color('Red')
  }
  else if (s==3) {
    c1=color('chocolate')
    c2=color('gold')
    c3=color('saddleBrown')
  }
  else if (s==4) {
    c1=color('lightcyan')
    c2=color('lightSkyBlue')
    c3=color('royalBlue')
  }
  _.times(numRows, r => {

    _.times(numColumns, c => {
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing

      var grey = lerpColor(c1,c2, (1/(numRows*numColumns))*cellNumber)
      //---gradient down column---
      // var grey = lerpColor(c1,c2, 1/numRows*r)
      //---gradient down row---
      // var grey = lerpColor(c1,c2, 1/numColumns*c)
      fill(grey)

      if (cellNumber < now.day){
        rect(x, y, cellW, cellL)
      }else if (cellNumber < totalCells){
        circle(x, y, 4)
      }

    })

  })

  var dow= now.weekday
  _.times(dow,i=>{
    for(var i=dow;dow>0;dow--){
      noFill()
      stroke(c3)
      strokeWeight(3)
      circle(width/2,height/2,50*dow)
    }
  }
)


circleColor = color(c3);
circleColor.setAlpha(100)
strokeWeight(8);
stroke(255,100,150);
noStroke()
push()
fill(circleColor)
translate(width/2,height/2)
rotate(-PI/2)
let hourEnd = map(z,0,24,0,2*PI)
arc(0,0,400,400,0,hourEnd)
let minEnd = map(y,0,60,0,2*PI)
arc(0,0,300,300,0,minEnd)
let secEnd = map(x,0,60,0,2*PI)
push()
rotate(secEnd)
stroke(circleColor)
line (0,0,100,0)
pop()
pop()

// /*hour*/
// push();
// translate(width/2,height/2);
// rotate(hRot);
// fill(255);
// polygon(0, 0, width/3, 5);
// pop();
//
// /*minute*/
// push();
// translate(width/2,height/2);
// rotate(mRot);
// fill(210);
// polygon(0, 0, width/4, 5);
// pop();
//
// /*second*/
// push();
// translate(width/2,height/2);
// rotate(sRot);
// fill(180);
// polygon(0, 0, width/5, 5);
// pop();




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
