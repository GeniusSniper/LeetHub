/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast = 0, slow = 0;
    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(fast === slow) break;
    }
    fast = 0;
    while(fast !== slow) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};