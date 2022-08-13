/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let index = s.length, c = {}, uniq = {};
    for(let i in s) {
        if(c[s[i]]) {
            delete uniq[s[i]];
        } else {
            uniq[s[i]] = i;
            c[s[i]] = true;
        }
    }
    
    Object.keys(uniq).forEach(k => index = Math.min(uniq[k], index));
    
    return index === s.length ? -1 : index;
};