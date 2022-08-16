/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let repeatedNum;
    for(let i in nums) nums[Math.abs(nums[i]) - 1] < 0 ? repeatedNum = Math.abs(nums[i]) : nums[Math.abs(nums[i]) - 1] *= -1;
    for(let i in nums) if(nums[i] > 0) return [repeatedNum, parseInt(i) + 1];
};