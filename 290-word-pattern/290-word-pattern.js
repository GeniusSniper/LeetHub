/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let checking = {};
    s = s.split(' ');
    if(pattern.length !== s.length) return false;
    for(let i in pattern) {
        if(checking[pattern[i]] && checking[pattern[i]] !== s[i]) return false;
        checking[pattern[i]] = s[i];
    }
    checking = {}
    for(let i in s) {
        if(checking[s[i]] && checking[s[i]] !== pattern[i]) return false;
        checking[s[i]] = pattern[i];
    }
    return true;
};