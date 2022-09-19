/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    function perm(c) {
        if(c < 0) return [[]];
        let temp = perm(c - 1);
        let res = JSON.parse(JSON.stringify(temp));;
        for(let i = 0; i < temp.length; i++) res.push(temp[i].concat(nums[c]));
        return res;
    }
    return perm(nums.length - 1);
};