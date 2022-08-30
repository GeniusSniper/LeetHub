/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let vert = {}, sql = {}, horn = {};
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === '.') continue;
            if(!vert[i]) vert[i] = {};
            if(!horn[j]) horn[j] = {};
            let verts = parseInt(i / 3), horns = parseInt(j / 3), num = board[i][j];
            if(!sql[verts + '' + horns]) sql[verts + '' + horns] = {};
            if(vert[i][num] || sql[verts + '' + horns][num] || horn[j][num]) return false;
            vert[i][num] = true;
            sql[verts + '' + horns][num] = true;
            horn[j][num] = true;
        }
    }
    
    return true;
};