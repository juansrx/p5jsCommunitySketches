// your sketch goes here!

var s = function( p ) {

  p.setup = function() {
    // put setup code here
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255, 255, 255);
  };

  p.draw = function() {
    // put draw code here
    
  };
};

var myp5 = new p5(s);