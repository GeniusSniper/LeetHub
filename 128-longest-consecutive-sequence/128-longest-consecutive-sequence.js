/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let obj = {}, max = 0;
    for(let i = 0; i < nums.length; i++) obj[nums[i]] = true;
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i] - 1]) continue;
        let num = nums[i], count = 0;
        while(obj[num]){
            num++;
            count++;
        }
        max = Math.max(count, max);
    }
    
    return max;
};