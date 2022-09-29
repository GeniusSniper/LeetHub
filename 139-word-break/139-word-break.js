/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, words = {}) {
    for(let i = 0; i < wordDict.length; i++) words[wordDict[i]] = true;
    function checkWord(i = 0, cache = {}, str = '') {
        if(i === s.length) return true;
        if(cache[i] === false) return false;
        while(i < s.length) {
            str += s[i];
            i++;
            if(words[str]){
                if(checkWord(i, cache)) return true;
                cache[i] = false;
            }
        }
        return false;
    }    
    return checkWord();
};