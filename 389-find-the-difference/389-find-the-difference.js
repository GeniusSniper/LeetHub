/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let difference = {};
    for(let i in s) difference[s[i]] = difference[s[i]] ? difference[s[i]] + 1 : 1;
    for(let i in t) {
        difference[t[i]] -= 1;
        if(difference[t[i]] === 0) delete difference[t[i]];
    }
    return Object.keys(difference)[0];
};