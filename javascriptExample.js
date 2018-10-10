var redVal = Math.floor((Math.random() * 255) + 1);
var greenVal = Math.floor((Math.random() * 255) + 1);
var blueVal = Math.floor((Math.random() * 255) + 1);
var fadeVal = Math.random();
var colorString = "rgba(" + redVal + ',' + greenVal + ',' + blueVal + ',' + fadeVal + ')';



var x = Math.round(0xffffff * Math.random()).toString(16);
var y = (6 - x.length);
var z ="000000";
var z1 = z.substring(0, y);
var color = "#" + z1 + x;


var colorStringVal = "#" + Math.random().toString(16).slice(2, 8);
