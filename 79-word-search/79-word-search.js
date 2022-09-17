/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    function dfs(i, j, w = 0){
        if(!word[w]) return true;
        if(i >= board.length || i < 0 || j < 0 || j >= board[i].length || board[i][j] !== word[w]) return false;
        let temp = board[i][j];
        board[i][j] = 0;
        
        let r = dfs(i + 1, j, w + 1) || dfs(i - 1, j, w + 1) || dfs(i, j + 1, w + 1) || dfs(i, j - 1, w + 1);
        board[i][j] = temp;
        
        return r;
    }
    
    for(let i = 0; i < board.length; i++) for(let j = 0; j < board[i].length; j++) if(dfs(i, j)) return true;
    
    return false;
};