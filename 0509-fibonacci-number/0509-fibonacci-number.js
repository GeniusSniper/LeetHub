/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, cache = {}) {
    if(cache[n]) return cache[n];
    if(n < 2) return n;
    cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
    return cache[n];
};