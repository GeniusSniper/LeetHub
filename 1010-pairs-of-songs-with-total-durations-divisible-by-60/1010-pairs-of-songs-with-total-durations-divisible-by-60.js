/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let cache = {}, count = 0;
    for(let i = 0; i < time.length; i++) {
        let tem = time[i] % 60;
        if(cache[60 - tem] || tem === 0 && cache[tem]) count += cache[60 - tem] || cache[tem];
        cache[tem] = cache[tem] ? cache[tem] + 1 : 1;
    }
    return count;
};