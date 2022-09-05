/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let first = nums[0];
    nums[0] = 0;
    let rob1 = houseRob(nums);
    nums[0] = first;
    nums[nums.length - 1] = 0;
    let rob2 = houseRob(nums);
    
    return Math.max(rob1, rob2, first);
};
    
function houseRob(nums) {
    let rob1 = 0, rob2 = 0;
    for(let i = 0; i < nums.length; i++) {
        let temp = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    
    return rob2;
}