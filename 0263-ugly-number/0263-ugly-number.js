/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n, cache = {}) {
    if(cache[n]) return cache[n];
    if(n === 0) return false;
    if(n === 1 || n == 2 || n == 3 || n == 5) return true;
    let div2 = n % 2 === 0 ? isUgly(n / 2) : false,
        div3 = n % 3 === 0 ? isUgly(n / 3) : false,
        div5 = n % 5 === 0 ? isUgly(n / 5) : false;
    cache[n] = div2 || div3 || div5;
    return cache[n];
};