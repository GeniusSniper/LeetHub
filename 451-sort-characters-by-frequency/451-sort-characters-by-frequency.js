/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let charC = {};
    for(let i = 0; i < s.length; i++) {
        charC[s[i]] = charC[s[i]] ? charC[s[i]] + 1 : 1;
    }
    
    let result = '';
    let arr = Object.keys(charC).sort( (a, b) => charC[a] < charC[b] ? 1 : -1).forEach(key => {result += key.repeat(charC[key])});
    return result;
};