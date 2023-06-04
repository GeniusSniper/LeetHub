/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let result = {};
    for(let i = 0; i < this.length; i++) {
        let temp = fn(this[i]);
        result[temp] ? result[temp].push(this[i]) : result[temp] = [this[i]];
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */