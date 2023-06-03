
var TimeLimitedCache = function() {
    this.obj = {};
    this.timeout = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let exist = !!this.obj[key];
    let timeout;
    if(exist) clearTimeout(this.timeout[key]);
    this.obj[key] = value;
    timeout = setTimeout(() => {
        delete this.obj[key];
        delete this.timeout[key];
    }, duration);
    this.timeout[key] = timeout;
    return exist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.obj[key] || -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.obj).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */