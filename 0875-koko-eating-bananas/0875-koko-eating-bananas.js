/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1, right = 0;
    for(let i = 0; i < piles.length; i++) right = Math.max(right, piles[i]);
    while(left < right) {
        let mid = parseInt((left + right) / 2), count = 0;
        for(let i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / mid);
        }
        if(count > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return right;
};