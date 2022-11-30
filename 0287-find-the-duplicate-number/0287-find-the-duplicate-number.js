/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast = nums[nums[0]], slow = nums[0];
    while(fast !== slow) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    fast = 0;
    while(fast !== slow) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};