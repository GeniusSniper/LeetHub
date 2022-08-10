/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i in stones) if(jewels.indexOf(stones[i]) > -1) count++;
    
    return count;
};