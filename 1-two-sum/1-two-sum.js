/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i<nums.length; i++)
    {
        let value = hash[target - nums[i]]
        if (value != null){
            return [value, i];
        }
        hash[nums[i]] = i;
    }
};