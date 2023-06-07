
var Trie = function() {
    this.obj = {};
    this.arr = [];
    this.size = 0;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(this.obj[word]){
        return;
    }
    this.size++;
    this.obj[word] = this.size;
    this.arr.push(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return !!this.obj[word];
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    for(let i = 0; i < this.size; i++){
        if(this.arr[i].startsWith(prefix)) return true;
    }
    return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */