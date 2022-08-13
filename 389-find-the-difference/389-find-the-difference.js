/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let difference = {};
    for(let i in s) {
        difference[s[i]] = difference[s[i]] ? difference[s[i]] + 1 : 1;
        difference[t[i]] = difference[t[i]] ? difference[t[i]] - 1 : -1;
        if(difference[s[i]] === 0) delete difference[s[i]];
        if(difference[t[i]] === 0) delete difference[t[i]];
    }
    difference[t[s.length]] = difference[t[s.length]] ? difference[t[s.length]] - 1 : -1;
    if(difference[t[s.length]] === 0) delete difference[t[s.length]] ;
    return Object.keys(difference)[0];
};