/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let changes = new Array(coins.length + 1).fill(new Array(amount + 1).fill(0));
    for(let i = 0; i < coins.length + 1; i++) {
        for(let j = 0; j < amount + 1; j++) {
            if(j === 0) {
                changes[i][j] = 1;
                continue;
            }
            if(i === 0) continue;
            let temp = changes[i][j - coins[i - 1]] || 0;
            changes[i][j] = changes[i - 1][j] + temp;
        }
    }
    return changes[coins.length][amount];
};