/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new MinPriorityQueue();
    nums.forEach(num => this.add(num));
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.enqueue(val);
    if(this.heap.size() > this.k) this.heap.dequeue();
    return this.heap.front().element;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 [4,5,8,2]
 [2,4,5,8]
 add 3 [2,3,4,5,8] 4
 add 5 [2,3,4,5,5,8] 5
 add 10 [2,3,4,5,5,8,10] 5
 add 9 [2,3,4,5,5,8,9,10] 8
 add 4 [2,3,4,4,5,5,8,9,10] 8
 */