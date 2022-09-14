/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 0) continue;
            let count = 1, connect = 0, block = [[i, j]], been = {};
            
            function addBlock(statement, x, y) {
                if(statement){
                    if(!been[x + '#' + y]){
                        block.push([x, y]);
                        count++;
                    }
                    connect++;
                }
            }
            
            while(block.length > 0) {
                const temp = block.pop();
                let x = temp[0], y = temp[1];
                if(been[x + '#' + y]) {
                    count--;
                    continue;
                }
                been[x + '#' + y] = true;
                addBlock(x - 1 > -1 && grid[x - 1][y] === 1, x - 1, y);
                addBlock(x + 1 < grid.length && grid[x + 1][y] === 1, x + 1, y);
                addBlock(y - 1 > -1 && grid[x][y - 1] === 1, x, y - 1);
                addBlock(y + 1 < grid[x].length && grid[x][y + 1] === 1, x, y + 1);
            }
            return count * 4 - connect;   
        }
    }
    
    return 0;
};