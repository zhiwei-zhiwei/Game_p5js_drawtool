 let brush = 1;
 let lastX = 0;
 let lastY = 0;
 let button;
 let button2;
 let rectXstart;
 let rectYstart;
 let rectXend;
 let rectYend;
 let tempCanvas;
 let colorMode;
 let brushSize;

let d = 30;
let g;
let angle = 0;
let r = 0;
let x = 0;
let y = 0;
var rot = 0;
var huevue = 0;
let needsnow = 0;

 function setup() {
   createCanvas(800, 800);
   tempCanvas = createGraphics(800,800);
   if(mouseX > 272.5 && mouseX < 527.5 && mouseY > 272.5 && mouseY < 527.5){
         tempCanvas.background(mouseX, mouseY, (mouseX + mouseY)/2);
      }
  tempCanvas.background(100, 100, 140);
  button = createButton('Brush');
  button.position(330,0);
  button.mousePressed(brushChange1);
   
  button = createButton('Triangle');
  button.position(380,0);
  button.mousePressed(brushChange2);
   
  button = createButton('ellipse');
  button.position(440,0);
  button.mousePressed(brushChange4);
   
  button = createButton('default');
  button.position(0,70);
  button.mousePressed(defaultColor);
   
  button = createButton('red');
  button.position(0,100);
  button.mousePressed(colorRed);
   
  button = createButton('green');
  button.position(0,130);
  button.mousePressed(colorGreen);
   
  button = createButton('blue');
  button.position(0,160);
  button.mousePressed(colorBlue);
   
  button = createButton('brush size 1');
  button.position(710,100);
  button.mousePressed(sizeone);
   
  button = createButton('brush size 2');
  button.position(710,130);
  button.mousePressed(sizetwo);
   
  button = createButton('brush size 3');
  button.position(710,160);
  button.mousePressed(sizethree);
   
  button = createButton('deafult brush');
  button.position(706,70);
  button.mousePressed(sizetdefault);
   
  button = createButton('snow');
  button.position(380,775);
  button.mousePressed(snow);
   
  d = 10;
  g = 100;
 }

 function draw() {
   image(tempCanvas,0,0);
   
   if (brush == 1) {
     if (mouseIsPressed == true) {
       if(colorMode == 1){ // red
          tempCanvas.stroke(color('red'));
        }else if(colorMode == 2){// green
          tempCanvas.stroke(color('green'));
        }else if(colorMode == 3){// blue
          tempCanvas.stroke(color('blue'));
        }else if(colorMode == 4){// default
          tempCanvas.stroke(color('black'));
        }else{
          tempCanvas.stroke(color('black'));
        }
      if(brushSize == 1){
        tempCanvas.strokeWeight(5);
      } else if(brushSize == 2){
        tempCanvas.strokeWeight(10);
      } else if(brushSize == 3){
        tempCanvas.strokeWeight(15);
      } else if(brushSize == 4){
        tempCanvas.strokeWeight(1);
      } 
       else{
        tempCanvas.strokeWeight(1);
      }
       
       
       tempCanvas.line(lastX,lastY,mouseX,mouseY);
     }


   } else if (brush == 2) {
     if (mouseIsPressed == true) {
       noFill();
       if(colorMode == 1){ // red
          stroke(color('red'));
        }else if(colorMode == 2){// green
          stroke(color('green'));
        }else if(colorMode == 3){// blue
          stroke(color('blue'));
        }else if(colorMode == 4){// default
          stroke(color('black'));
        }else{
          stroke(color('black'));
        }
       if(brushSize == 1){
        strokeWeight(5);
      } else if(brushSize == 2){
        strokeWeight(10);
      } else if(brushSize == 3){
        strokeWeight(15);
      } else if(brushSize == 4){
        strokeWeight(1);
      } 
       else{
        strokeWeight(1);
      }
       triangle(rectXstart,rectYstart,mouseX-rectXstart,mouseY-rectYstart,mouseX+rectXstart,mouseY+rectYstart);     
     }
   }
   else if (brush == 4) {
     if (mouseIsPressed == true) {
       if(colorMode == 1){ // red
          stroke(color('red'));
        }else if(colorMode == 2){// green
          stroke(color('green'));
        }else if(colorMode == 3){// blue
          stroke(color('blue'));
        }else if(colorMode == 4){// default
          stroke(color('black'));
        }else{
          stroke(color('black'));
        }
       if(brushSize == 1){
        strokeWeight(5);
      } else if(brushSize == 2){
        strokeWeight(10);
      } else if(brushSize == 3){
        strokeWeight(15);
      } else if(brushSize == 4){
        strokeWeight(1);
      } 
       else{
        strokeWeight(1);
      }
        noFill();
       ellipse(rectXstart,rectYstart,mouseX-rectXstart,mouseY-rectYstart);  
     }

   }
   
   
  lastX = mouseX;
  lastY = mouseY;
   if(needsnow == 1){
     translate(width / 2, height / 2);
    huevue=mouseX;
    huevue=map(huevue,0,width,0,255);
    tempCanvas.fill(huevue,255,255);
   tempCanvas.noStroke();
  for(i=0;i<100;i++){
  tempCanvas.ellipse(x, y, 3, 3);
   }
   
}
 }

function mousePressed(){
  rectXstart = mouseX;
  rectYstart = mouseY;
  if(brush == 3){
    tempCanvas.line(lastX,lastY,mouseX,mouseY);
  }
}

function mouseReleased(){
  if(brush == 2){
    if(colorMode == 1){ // red
          tempCanvas.stroke(color('red'));
        }else if(colorMode == 2){// green
          tempCanvas.stroke(color('green'));
        }else if(colorMode == 3){// blue
          tempCanvas.stroke(color('blue'));
        }else if(colorMode == 4){// default
          tempCanvas.stroke(color('black'));
        }else{
          tempCanvas.stroke(color('black'));
        }
  tempCanvas.noFill();
    if(brushSize == 1){
        tempCanvas.strokeWeight(5);
      } else if(brushSize == 2){
        tempCanvas.strokeWeight(10);
      } else if(brushSize == 3){
        tempCanvas.strokeWeight(15);
      } else if(brushSize == 4){
        tempCanvas.strokeWeight(1);
      } 
       else{
        tempCanvas.strokeWeight(1);
      }
  tempCanvas.triangle(rectXstart,rectYstart,mouseX-rectXstart,mouseY-rectYstart,mouseX+rectXstart,mouseY+rectYstart); 
  } else if(brush == 4){
    if(colorMode == 1){ // red
          tempCanvas.stroke(color('red'));
        }else if(colorMode == 2){// green
          tempCanvas.stroke(color('green'));
        }else if(colorMode == 3){// blue
          tempCanvas.stroke(color('blue'));
        }else if(colorMode == 4){// default
          tempCanvas.stroke(color('black'));
        }else{
          tempCanvas.stroke(color('black'));
        }
  tempCanvas.noFill();
    if(brushSize == 1){
        tempCanvas.strokeWeight(5);
      } else if(brushSize == 2){
        tempCanvas.strokeWeight(10);
      } else if(brushSize == 3){
        tempCanvas.strokeWeight(15);
      } else if(brushSize == 4){
        tempCanvas.strokeWeight(1);
      } 
       else{
        tempCanvas.strokeWeight(1);
      }
  tempCanvas.ellipse(rectXstart,rectYstart,mouseX-rectXstart,mouseY-rectYstart);
  }
}

function mouseMoved() {
  x = r * cos(angle);
  y = r * sin(angle);
  angle += 0.1;
  r += 0.2;
}

function brushChange1(){
  brush = 1;
}

function brushChange2(){
  brush = 2;
}

function brushChange4(){
  brush = 4;
}

function colorRed(){
  colorMode = 1;
}

function colorGreen(){
  colorMode = 2;
}

function colorBlue(){
  colorMode = 3;
}

function defaultColor(){
  colorMode = 4;
}

function sizeone(){
  brushSize = 1;
}

function sizetwo(){
  brushSize = 2;
}

function sizethree(){
  brushSize = 3;
}

function sizetdefault(){
  brushSize = 4;
}

function snow(){
  needsnow = 1;
}