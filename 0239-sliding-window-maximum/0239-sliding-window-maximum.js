/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let que = [], left = 0, result = [];
    while(left < nums.length) {
        if(k === left - que[0]) que.shift();
        if(que.length === 0 || nums[que[que.length - 1]] >= nums[left]){
            que.push(left);
        } else {
            while(nums[que[que.length - 1]] < nums[left]){
                que.pop();
            }
            que.push(left);            
        }
        left++;
        if(left < k) continue;
        result.push(nums[que[0]]);
    }
    
    return result;
};