/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    let differentGroup = {};
    for(let i in words) {
        let wordC = [new Array(26).fill(0), new Array(26).fill(0)];
        for(let j = 0; j < words[i].length; j++) wordC[j % 2][words[i][j].charCodeAt() - 97]++;
        differentGroup[wordC[0].join('#') + wordC[1].join('#')] = true;
    }
    
    return Object.keys(differentGroup).length;
};