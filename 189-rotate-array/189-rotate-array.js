/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length;
    k = k % len;
    reverse(nums, len - 1);
    reverse(nums, k - 1);
    reverse(nums, len - 1, k);
};

function reverse(arr, j, i = 0) {
    while(i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}