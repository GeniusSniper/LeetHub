/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pq = new MaxPriorityQueue();
    for(let num of nums) pq.enqueue(num);
    for(let i = 1; i < k; i++) pq.dequeue();
    return pq.front().element;
};