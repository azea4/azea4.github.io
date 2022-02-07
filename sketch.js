var vert; //verticle value
var horz //horizontal value

function preload(){
im = loadImage('https://m.media-amazon.com/images/I/61J-LIakH7L._SL1500_.jpg');//Temp for testing fft
}

function setup() {
  createCanvas(1200, 400);
  fft = new p5.FFT();
}

function draw() {
  background(220);
  for(var i= 1;i <= 5; i++){
    vert = 100 + 50 *(i-1);
    circle(200,vert,50);
  }// draw verticle line of circle
  
  for(var j =1; j <= 4; j++){
    if(j <= 2){
      horz = 200 + (100 * (3 / (2*j * sqrt(3))));
      vert = 200 - (100/(2*j));
    }else{
      horz = 200 - (100 * (3 / (2 * (j-2) * sqrt(3))));
      vert = 200 + (100/(2*(j-2)));
    }
    circle(horz,vert,50);
  }
  for(var k =1; k <= 4; k++){
    if(k <= 2){
      horz = 200 + (100 * (3 / (2*k * sqrt(3))));
      vert = 200 + (100/(2*k));
    }else{
      horz = 200 - (100 * (3 / (2 * (k-2) * sqrt(3))));
      vert = 200 - (100/(2*(k-2)));
    }
    circle(horz,vert,50);
  }
  x1 = 200 + (100 * (3 / (2 * sqrt(3))));
  x2 = 200 - (100 * (3 / (2 * sqrt(3))));
  x3 = 200 + (100 * (3 / (4 * sqrt(3))));
  x4 = 200 - (100 * (3 / (4 * sqrt(3))));
  y1 = 200 - (100/2);
  y2 = 200 + (100/2);
  y3 = 200 - (100/4);
  y4 = 200 + (100/4);
  
  line(x1,y1,x1,y2);
  line(x2,y1,x2,y2);
  line(x3,y3,x3,y4);
  line(x4,y3,x4,y4);
  line(x1,y1,200,100);
  line(x2,y1,200,100);
  line(x1,y4+25,200,300);
  line(x2,y4+25,200,300);
  line(x3,y1+25,200,150);
  line(x4,y1+25,200,150);
  line(x3,y2-25,200,250);
  line(x4,y2-25,200,250);
  line(200,100,200,300);
  line(x1,y1,x2,y2);
  line(x1,y3+75,x2,y4-75);
  line(200,100,x3,y3);
  line(200,100,x4,y3);
  line(x3,y4,200,300);
  line(x4,y4,200,300);
  
  //fft work in progress
  image(im, 400, 0, 400,400);
  var w = im.width;
  var h = im.height;
  
  
  //reorganize
  
  
  
  
  
}