/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let one;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            one = true;
            break;
        }
    }
    if(!one) return 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 1 || nums[i] > nums.length) nums[i] = 1;
    }
    
    for(let i = 0; i < nums.length; i++) {
        let cur = (nums[i] - 1) % nums.length;
        nums[cur] += nums.length;
    }
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= nums.length) return i + 1;
    }
    
    return nums.length + 1;
};