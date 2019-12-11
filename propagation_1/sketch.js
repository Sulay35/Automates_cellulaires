
var grid = [];
function setup() {
    createCanvas(1000, 1000);

    for(var i = 0; i<100; i++){
        var arr = new Array(100);
        arr.fill(0)
        grid.push(arr); 
    }
}
var w = 10;
var h = w;

function propagate(){
    for(var i = 0; i < 100; i++){
        for(var j = 0; j < 100; j++){
          if(i -1 != -1 && i + 1 != 100 &&
             j -1 != -1 && j + 1 != 100 
            )
            { 
                if(grid[i][j] == 1){
                    // [X,X,X]
                    // [ , , ]
                    // [, , ,]
                    if(grid[i-1][j-1] == 0){
                        grid[i-1][j-1] = 1;
                    }
                    else if(grid[i][j-1] == 0){
                        grid[i][j-1] = 1;
                    }
                    else if(grid[i+1][j-1] == 0){
                        grid[i+1][j-1] = 1;
                    }
                    // [ , , ]
                    // [X,X,X]
                    // [ , , ]
                    else if(grid[i-1][j] == 0){
                        grid[i-1][j] = 1;
                    }
                    else if(grid[i][j] == 0){
                        grid[i][j] = 1;
                    }
                    else if(grid[i+1][j] == 0){
                        grid[i+1][j] = 1;
                    }
                    // [ , , ]
                    // [ , , ]
                    // [X,X,X]
                    else if(grid[i-1][j+1] == 0){
                        grid[i-1][j+1] = 1;
                    }
                    else if(grid[i][j+1] == 0){
                        grid[i][j+1] = 1;
                    }
                    else if(grid[i+1][j+1] == 0){
                        grid[i+1][j+1] = 1;
                    }
                }
            }
          
          
          
      }
      }
}


function draw() {
  background(220);
  
  noStroke();
  //Draw the grid
  for(var i = 0; i < 100; i++){
    for(var j = 0; j < 100; j++){
      if( grid[i][j] == 0){
        fill(215, 200, 200)
         rect(i*10, j*10 , w, h);
      }
      else if( grid[i][j] == 1){
        fill(255, 203, 0);
        rect(i*10, j*10, w, h);
      }    
    }
  }
  
  
}

function mouseClicked(){
    var mX = round((mouseX-5)/10);
    var mY = round((mouseY-5)/10); 
    console.log("mouse X : ", mX); 
    console.log("mouse Y : ", mY); 
    if(grid[mX][mY] == 0){
        grid[mX][mY] = 1;
    }else{
        grid[mX][mY] = 0;
    }
    
}

setInterval(propagate, 100)
