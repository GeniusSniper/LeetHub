/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = this.nums ? [...this.nums, ...nums] : nums;
};

ArrayWrapper.prototype.valueOf = function() {
    if(!this.nums || !this.nums.length) return 0;
    return this.nums.reduce((a,b) => a + b);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */