//“Old pond
//A frog jumps in –
//The sound of water”
//Matsuo Basho


let vert; //verticle value
let horz; //horizontal value

function setup() {
  c = createCanvas(800, 400);
  frameRate(1)
}

function draw() {
  background('BLACK');
  let gridCord = [];  //stores all potential coordinates
  let loca = []; //poem object coordinates
  //array of poem objects
  let hi =['Old','po','nd','A','fr','og','ju','mps','in','The','sou','nd','of','wat','er']
  
  let xVal = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]; //initial potential x value
  let yVal = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]; //initial potential y value
  
  //stores coordinates on the 10 x10 grid
  for(let i = 0; i <= xVal.length-1; i++ ){
      gridCord[i] = yVal;
  }
  
  for(let i= 1;i <= 5; i++){
      fill('#FF00FF')
      vert = 40 + 80 *(i-1);
      circle(200,vert,80);
  }// draw verticle line of circle

  x1 = 200 + (160 * (3 / (2 * sqrt(3))));
  x2 = 200 - (160 * (3 / (2 * sqrt(3))));
  x3 = 200 + (160 * (3 / (4 * sqrt(3))));
  x4 = 200 - (160 * (3 / (4 * sqrt(3))));
  y1 = 200 - (160/2);
  y2 = 200 + (160/2);
  y3 = 200 - (160/4);
  y4 = 200 + (160/4);
  
  var cordx = [x1,x3,x2,x4,x1,x3,x2,x4];
  var cordy = [y1,y3,y2,y4,y2,y4,y1,y3];
  let j =0;//index variable
  
  //draws diagonal circles
  while(j <= cordx.length-1){
    fill('#FF00FF')
    circle(cordx[j],cordy[j],80)
    j++
  }
  
  stroke('WHITE')
  line(x1,y1,x1,y2);
  line(x2,y1,x2,y2);
  line(x3,y3,x3,y4);
  line(x4,y3,x4,y4);
  line(x1,y1,200,40);
  line(x2,y1,200,40);
  line(x1,y4+40,200,360);
  line(x2,y4+40,200,360);
  line(x3,y1+40,200,120);
  line(x4,y1+40,200,120);
  line(x3,y2-40,200,280);
  line(x4,y2-40,200,280);
  line(200,40,200,360);
  line(x1,y1,x2,y2);
  line(x1,y3+120,x2,y4-120);
  line(200,40,x3,y3);
  line(200,40,x4,y3);
  line(x3,y4,200,360);
  line(x4,y4,200,360);
  line(200,40,x2,y2);
  line(200,40,x1,y2);
  line(200,40,x3,y4);
  line(200,40,x4,y4);
  line(200,360,x2,y1);
  line(200,360,x1,y1);
  line(200,360,x3,y3);
  line(200,360,x4,y3);
  line(x1,y1,200,120);
  line(x2,y1,200,120);
  line(x1,y2,200,280);
  line(x2,y2,200,280);
  line(x1,y1,200,280);
  line(x2,y1,200,280);
  line(x1,y2,200,120);
  line(x2,y2,200,120);
  line(x2,y1,x3,y3);
  line(x1,y1,x4,y3);
  line(x2,y2,x3,y4);
  line(x1,y2,x4,y4);
  
  for(i=0;i<= hi.length-1; i ++){
     

    //random coordinate for poem object
    let x1 = random(xVal);
    let y1 = random(yVal);
   
    //prevents repeating coordinates
    while(arrayInarray(loca,[x1, gridCord[x1][y1]]) == true){
        x1 = random(xVal);
        y1 = random(yVal);
    }
    loca[i] = [x1, gridCord[x1][y1]];
    
    }
 
 //place letters 
  for(let k = 0; k <=loca.length-1;k++){
    textAlign(CENTER)
    fill('YELLOW');
    textSize(20);
    text(hi[k],20+40*(loca[k][0]), 20+40*(loca[k][1])); 
  }
  
  //for(let i = 1; i <=10; i ++){
    //for(let j = 1; j <=10; j ++){
        //text('the',20+40*(i-1), 20+40*(j-1))
    //}
  //}
  
  
  //image(im, 800, 0, 40, 40, 750, 1200, 200, 300);
  //for(i =0; i <= 40; i++){
    //bloxs[i] = im()
  //}
  //reorganize
  let img = c.get();
  //change 6 and 7 value to grab from og square
  // change 2 and 3 for placement
  //image(img, 400, 0, 40, 40,200,120,40,40);
  
  let placem = [[3,2],[3,4],[3,5],[5,1],[5,3],[5,4],[5,6],[5,7],[5,9],[7,1],[7,3],[7,4],[7,6],[7,8],[7,9]];//placements for poem

  for(let i = 0; i <= placem.length-1; i++){
    image(img, 400+(40*placem[i][1]), 40*placem[i][0],40,40,40*loca[i][0],40*loca[i][1],40,40);//places poem
  }
  let placed = []; //stores placed coordinates
  for(let i = 0; i < loca.length;i++){
  placed.push(loca[i]);
  }
 

  for(let i = 0; i <=10; i++){
    for(let j = 0; j <=10; j++){
      //places only if value has not already been placed
      if(arrayInarray(placem,[j,i]) == false){
          let x2 = random(xVal); //x coordinate of random square from original
          let y2 = random(yVal); //y coordinate of randomw square from original
          
          //rerolls values until unique square is placed
          while(arrayInarray(placed,[x2,y2])== true){
            x2 = random(xVal); 
            y2 = random(yVal);
          }
          //places square
         image(img, 400+40*i, 40*j,40,40,40*x2,40*y2,40,40)
      }
      //removes original square from possible squares to be places
      placed.push([x2,y2]);
    }
  }

}


function arrayInarray(array,subarray){
    for(var i = 0; i<array.length; i++){
            let checker = [] //stores if there is a postive
            for(var j = 0; j<array[i].length; j++){
                if(array[i][j] === subarray[j]){
                    checker.push(true) //places true value in checker if a match is found
                } else {
                    checker.push(false)
                }
            }
            if (checker.every(check => check === true)){
                return true
            }
        }
        return false
}