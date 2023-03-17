/**
 * @param {number[]} nums
 * @return {number}
 */
/*
 add up the whole array going through backwards to check if both is equal to each other then return the index
 */
var findMiddleIndex = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let l = 0, r = sum;// 0, 4
    for(let i = 0; i < nums.length; i++) {
        let temp = nums[i]; //1 , -1, 4
        r -= temp;// 4 - 1 , 4, 0 
        if(l === r) return i;// 0 = 3 , 1 = 4, 0 0
        l += temp; // 1, 0
    }
    return -1;
};