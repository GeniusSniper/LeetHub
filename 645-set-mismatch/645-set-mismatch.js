/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let missingNumAndRepeatedNum = {}, reapeatedNum = {};
    for(let i = 0; i < nums.length; i++) {
        missingNumAndRepeatedNum[i + 1] ? delete missingNumAndRepeatedNum[i + 1] : missingNumAndRepeatedNum[i + 1] = true;
        missingNumAndRepeatedNum[nums[i]] ? delete missingNumAndRepeatedNum[nums[i]] : missingNumAndRepeatedNum[nums[i]] = true;
        reapeatedNum[nums[i]] = true;
    }
    let allNum = Object.keys(missingNumAndRepeatedNum);
    return reapeatedNum[allNum[0]] ? allNum : [allNum[1], allNum[0]];
};