/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let distances = [];
    for(let i = 0; i < word1.length + 1; i++) distances.push(new Array(word2.length + 1).fill());
    for(let i = 0; i < word1.length + 1; i++) distances[i][word2.length] = word1.length - i;
    for(let i = 0; i < word2.length + 1; i++) distances[word1.length][i] = word2.length - i;
    
    for(let i = word1.length - 1; i > -1; i--) {
        for(let j = word2.length - 1; j > -1; j--) {
            if(word1[i] === word2[j]){
                distances[i][j] = distances[i + 1][j + 1];
                continue;
            }
            distances[i][j] = 1 + Math.min(distances[i + 1][j + 1], distances[i + 1][j], distances[i][j + 1]);            
        }
    }
    
    return distances[0][0];
};