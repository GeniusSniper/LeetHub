/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, i = 0, cache = {}, str = '') {
    if(i === s.length) return true;
    if(cache[i] === false) return false;
    while(i < s.length) {
        str += s[i];
        i++;
        if(wordDict.includes(str)){
            if(wordBreak(s, wordDict, i, cache)) return true;
            cache[i] = false;
        }
    }
    
    return false;
};