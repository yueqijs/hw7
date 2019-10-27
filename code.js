var song1;
var song2;
var song3;
var song4;
var song5;
var song6;

// Music Editing
var levels=[];
var sx,sy,r=0,angle=0;
var size;



function preload(){
  song1 =loadSound('bass.mp3');
  song2 =loadSound('drum.mp3');
  song3 =loadSound('vocal.mp3');
  song4 =loadSound('effect.mp3');
  song5 =loadSound('melody.mp3');
  song6 =loadSound('Gunload.wav');
}



function setup() {
  noStroke();
  angleMode(DEGREES);
  createCanvas(window.innerWidth,window.innerHeight);
  fft = new p5.FFT();
  amp= new p5.Amplitude();
    frameRate(10);
  fill(220);
  textSize(100);
  stroke(220);
} 



function draw() {
  
  translate(width/2,height/2);
  background(21);
  var level = amp.getLevel();
  noStroke();
  var k = fft.waveform();
  size = map(level, 0, 1, 10, width-500);
      
 // level.push(level);
  var c = map(level, 0, 1, 15, 0);
    beginShape();
  for(angle=0;angle<=360;angle++){
    if(angle%2===0){
      r=size*2;
    }
    else{
      r=size*1;
    }
    sx=r*cos(angle);
    sy=r*sin(angle);
    vertex(sx,sy);33445
  }
  endShape(CLOSE);  
    }


function keyPressed() {
  
  //play bass
  if (key == "1") {
  if (song1.isPlaying() ) {
      song1.stop();
    } else {
      song1.loop();
    fill(95,158,160);

    }
  }
  
  //play drum
  if (key == "2") {
  if (song2.isPlaying() ) {
      song2.stop();
    } else {
      song2.loop();
      fill(72,209,204);
    }
  }
    
  //play effect
  if (key == "3") {
  if (song3.isPlaying() ) {
      song3.stop();
    } else {
      song3.loop();
    fill(0,206,209);
    }
  }
  
  //play vocal
  if (key == "4") {
  if (song4.isPlaying() ) {
      song4.stop();
    } else {
      song4.play();
      fill(0,255,255);
    }   
  }
  
    //play melody
  if (key == "5") {
  if (song5.isPlaying() ) {
      song5.stop();
    } else {
      song5.loop();
      fill(0,0,255);
    }   
  }

}


function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {

    text("hear me?", random(width), random(height));
       text("hear me?", random(width), random(height));
       text("hear me?", random(width), random(height));
       text("hear me?", random(width), random(height));
       text("hear me?", random(width), random(height));
       text("hear me?", random(width), random(height));
       text("hear me?", random(width), random(height));
       song6.play();
  }}




  
