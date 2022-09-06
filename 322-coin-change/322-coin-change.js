/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, cache = {}) {
    if(amount === 0) return 0;
    if(amount < 0) return -1;
    if(cache[amount]) return cache[amount];
    let minChange = Infinity;
    for(let i = 0; i < coins.length; i++){
        let temp = coinChange(coins, amount - coins[i], cache);
        if(temp === -1) temp = Infinity;
        minChange = Math.min(minChange, 1 + temp);
    }
    if(minChange === Infinity) {
        cache[amount] = -1;
        return -1;
    }
    cache[amount] = minChange;
    return minChange;
};