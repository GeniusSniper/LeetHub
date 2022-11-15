/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0, right = matrix.length;
    while(left < right){
       let mid = parseInt((left + right) / 2); 
        console.log(mid)
        if(matrix[mid][0] <= target && (mid + 1 >= matrix.length || matrix[mid + 1][0] > target)) return bs(matrix, target, mid);
        target < matrix[mid][0] ? right = mid : left = mid + 1;
    }
    return false;
};

function bs(arr, target, i) {
    let left = 0, right = arr[i].length;
    while(left < right) {
        let mid = parseInt((left + right) / 2);
        if(arr[i][mid] === target) return true;
        target < arr[i][mid] ? right = mid : left = mid + 1;
    }
    
    return false;
}