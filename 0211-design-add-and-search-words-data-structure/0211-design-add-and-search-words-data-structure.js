
var WordDictionary = function() {
    this.obj = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let temp = this.obj, i = 0;
    for(; i < word.length; i++) {
        if(temp[word[i]]) {
            temp = temp[word[i]];
            continue;
        }
        temp[word[i]] = {};
        temp = temp[word[i]];
    }
    temp['isword'] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return searchword(this.obj, word);
};

function searchword(obj, str, i = 0) {
    if(!obj || str[i] !== '.' && !obj[str[i]]) return false;
    let ch = str[i];
    if(i === str.length - 1) {
        if(ch === '.') {
            return Object.keys(obj).some(k => obj[k]['isword']);
        }
        return !!obj[str[i]]['isword'];
    }
    if(ch !== '.') return searchword(obj[str[i]], str, i + 1);
    if(Object.keys(obj).some(k => searchword(obj[k], str, i + 1))) return true;
    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */