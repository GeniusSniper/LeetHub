/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    /*
        2d arr 
        go throught the arr keep the position of the rotten orange
        arr stack infect other oranges
        each iternation increase count
    */
    let count = 0, stack = [];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 2) stack.push([i, j]);
        }
    }
    if(stack.length > 0) count--;
    
    while(stack.length > 0) {
        count++;
        let arr = [];
        while(stack.length > 0) {
            let pos = stack.pop();
            let x = pos[0], y = pos[1];
            if(x - 1 > -1 && grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2;
                arr.push([x - 1, y]);
            }
            if(y - 1 > -1 && grid[x][y - 1] === 1) {
                grid[x][y - 1] = 2;
                arr.push([x, y - 1]);
            }
            if(x + 1 < grid.length && grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2;
                arr.push([x + 1, y]);
            }
            if(y + 1 < grid[x].length && grid[x][y + 1] === 1) {
                grid[x][y + 1] = 2;
                arr.push([x, y + 1]);
            }
        }
        stack = arr;
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 1) return -1;
        }
    }
    
    return count;
};