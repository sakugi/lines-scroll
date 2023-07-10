let x2 = 110;
let y2 =30;
let mic;

 function setup(){
  //createCanvas((windowHeight/3), windowHeight);
  mycanvas = createCanvas(120, 360);
  background(255);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(15);
  strokeCap(SQUARE);
  loop();
}
 function blackLine(x1, y1, x2, y2){
   stroke(0);
   line (x1, y1, x2, y2);
   
 }
 function whiteLine(x1, y1, x2, y2){
   stroke(255);
   line (x1, y1, x2, y2);
   
 }


function draw(){      
  strokeWeight(6);
  micLevel = mic.getLevel();
  console.log(micLevel);
  x2 --;
  whiteLine(11, y2, x2, y2)
  //if(y2 < (windowHeight-30)){
  if(y2 < 330){
      if (micLevel > 0.005){
        blackLine(11, y2, (x2), y2)
      }
    }
  if (x2 == 10){
      x2 = 110;
      y2 = y2 +10;
      }
  if(y2==330){
     saveCanvas(mycanvas,"present moment","png");
     clear();    
     background(255);
     y2 = 30;
  }
}
