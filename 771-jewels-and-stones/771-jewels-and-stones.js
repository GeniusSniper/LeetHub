/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewel = {};
    for(let i in jewels) jewel[jewels[i]] = true;
    let count = 0;
    for(let i in stones) if(jewel[stones[i]]) count++;
    
    return count;
};