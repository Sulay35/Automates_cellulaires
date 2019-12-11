
# Cellular Automata
_Making differents Cellular Automata with Javascript_

> Made with P5.js librairy : https://p5js.org/

> #####  Base for each projects : 
> - Creation of a 2D array 100 * 100,  represented with 10 * 10 squares  
>   * If the value of a cell is 0 : color of the square --> White 
>   * If the value of a cell is 1 : color of the square --> Orange


### 1- Propagation : 
```
[0,0,0]
[0,X,0]
[0,0,0]
```
> X( I , J ) = 1

If arround X the cell are empties then fill them with 1, the same process is repeated for each cells of the grid everytime in the `draw() ` function: 
```javascript
if(grid[i][j] ==  1){

if(grid[i-1][j-1] ==  0){
grid[i-1][j-1] =  1;
}

else  if(grid[i][j-1] ==  0){
grid[i][j-1] =  1;
}

else  if(grid[i+1][j-1] ==  0){
grid[i+1][j-1] =  1;
}

else  if(grid[i-1][j] ==  0){
grid[i-1][j] =  1;
}

else  if(grid[i+1][j] ==  0){
grid[i+1][j] =  1;
}

else  if(grid[i-1][j+1] ==  0){
grid[i-1][j+1] =  1;
}

else  if(grid[i][j+1] ==  0){
grid[i][j+1] =  1;
}

else  if(grid[i+1][j+1] ==  0){
grid[i+1][j+1] =  1;
}
}
```

