/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    /*
        force: map every possible arr to dict
            check row and colmn
            
        grid.length
        check val eaquals
    */
    let counter = 0;
    
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++) {
            if(check(r, c)){
                counter++;
            };
        }
    }
    
    function check(r, c) {
        for(let i = 0; i < grid.length; i++) {
            if(grid[r][i] !== grid[i][c]) return false;
        }    
        return true;
    }
    
    return counter;
};