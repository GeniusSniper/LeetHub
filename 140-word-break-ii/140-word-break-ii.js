/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict, result = [], words = {}) {
    for(let i = 0; i < wordDict.length; i++) words[wordDict[i]] = true;
    function findWord(i = 0, cache = {}, cent = '', str = '') {
        if(i === s.length) return result.push(cent.substring(0, cent.length - 1));
        if(cache[i]) return cache[i];
        while(i < s.length){
            str += s[i];
            i++;
            if(words[str]) {
                let x = findWord(i, cache, cent + str + ' ')
                cache[i] = x;
            }
        }
        
        return '';
    }
    findWord();
    return result;
};