/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    function helper(num = target, maxDouble = maxDoubles){
        if(num === 1) return 0;
        if(maxDouble === 0) return num - 1;
        let doubleNum = Infinity, notDouble = Infinity;
        if(num % 2 === 0 && maxDouble > 0) {
            doubleNum = helper(num / 2, maxDouble - 1);
        }
        if(num % 2 === 1){
            notDouble = helper(num - 1, maxDouble);            
        }
        return 1 + Math.min(doubleNum, notDouble);
    }
    return helper();
};