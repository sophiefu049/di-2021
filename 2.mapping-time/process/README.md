## Process

Description of the contents of this folder and the logic of your data → retinal variables mapping.

seconds, minutes, hour = x, y, z

Set 1:
background hue= based on the seconds, min, hour.
background (255/x, 255/y, 255/z)
based on hour = number of horizontal lines.
based on minute = number of circles from the middle point of canvas.

20, 15, 1
background (12, 17, 255)
1 horizontal line
15 circles, width increase by 1

40, 15, 13
background (6, 17, 19)
13 horizontal line
15 circles, width increase by 1

10, 45, 19
background (25, 6, 13)
19 horizontal line
45 circles, width increase by 1


Set 2:
opacity of circle = hour * 4 
color = (255/x, 255/y, 255/z)
width of ellipse = 20 * minute
x/y of the location of ellipse = hour + 20, hour * 2

20, 15, 1
opacity of circle = 4%
color = (12, 17, 255)
width of ellipse = 300px
location = 21, 2

40, 15, 13
opacity of circle = 52%
color = (6, 17, 19)
width of ellipse = 300px
location = 33, 26

10, 45, 19
opacity of circle = 76%
color = (25, 6, 13)
width of ellipse = 900px
location = 39, 38


Set 3:
first circle = size (x*5), opacity = 30%
second circle = size (y*5), opacity =50%
third circle = size (z*5), opacity = 70%
x/y coordinate = width/6*1, width/6*3, width/6*5
color= red.


20, 15, 1
first circle = 100 diameter 
second circle = 75 d
third = 5 d


40, 15, 13
200 d, 75 d, 65d

10, 45, 19
50d, 225d, 95d

1:15 am 20 sec
1:15 pm 40 sec
7:45 pm 10 sec



12* day of week: stroke
rotation: 360/month 


opacity: 50/month
size: day*10 , day*20
