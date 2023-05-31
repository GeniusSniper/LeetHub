/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    function rec(val, i,temp = []){
        if(i < 0) return;
        const cursum = val + candidates[i];
        if(cursum > target) {
            rec(val, i - 1, temp);
            return;
        }
        if(cursum === target) {
            result.push([...temp, candidates[i]]);
            rec(val, i - 1, temp);
            return;
        }
        rec(cursum, i, [...temp, candidates[i]]);
        rec(val, i - 1, temp);
    }
    rec(0, candidates.length - 1);
    return result;
};