/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length;
    while(left <= right) {
        let mid = parseInt((right + left) / 2);
        if(nums[mid] === target) return mid;
        nums[mid] > target ? right = mid - 1 : left = mid + 1;
    }
    return -1;
};