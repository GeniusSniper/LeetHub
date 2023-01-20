/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n === 0) return 1;
    let answer = 10, base = 9;
    for(let i = 2; i < n + 1; i++) {
        base = base * (9 - i + 2);
        answer += base;
    }
    return answer;
};