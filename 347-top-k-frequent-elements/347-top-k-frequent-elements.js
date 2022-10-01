/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k, result = []) {
    let obj = {}, mc = new Array(nums.length + 1);
    for(let i = 0; i < nums.length; i++) obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    let arr = Object.keys(obj);
    for(let i = 0; i < arr.length; i++) mc[obj[arr[i]]] ? mc[obj[arr[i]]].push(arr[i]) : mc[obj[arr[i]]] = [arr[i]];
    for(let i = mc.length - 1; i > 0; i--) {
        if(!mc[i]) continue;
        for(let j = 0; j < mc[i].length; j++){
            result.push(mc[i][j]);
            k--;
            if(k === 0) return result;
        }
    }
    return result;
};