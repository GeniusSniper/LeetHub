/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let longest = -Infinity, cache = {};
    
    function dfs(i, j, pre = -Infinity) {
        if(i >= matrix.length || i < 0 || j < 0 || j >= matrix[i].length || pre >= matrix[i][j]) return 0;
        if(cache[i + '#' + j]) return cache[i + '#' + j];
        let temp = matrix[i][j];
        matrix[i][j] = -Infinity;
        let max = Math.max(dfs(i + 1, j, temp), dfs(i - 1, j, temp), dfs(i, j + 1, temp), dfs(i, j - 1, temp)) + 1;
        matrix[i][j] = temp;
        cache[i + '#' + j] = max;
        return max;
    }
    
    for(let i = 0; i < matrix.length; i++) for(let j = 0; j < matrix[i].length; j++) longest = Math.max(longest, dfs(i, j));
    return longest;
};