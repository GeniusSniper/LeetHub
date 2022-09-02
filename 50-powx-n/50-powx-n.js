/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n === 0 ? 1 : n > 0 ? n % 2 === 0 ? myPow(x * x, parseInt(n / 2)) : x * myPow(x * x, parseInt(n / 2)) : myPow(1 / x, n * -1);
};