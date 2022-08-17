/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    let differentGroup = {};
    function genGroup(word) {
        let letterCodd = {}, letterCeven = {};
        for(let i = 0; i < word.length; i++) i % 2 === 0 ? letterCodd[word[i]] = letterCodd[word[i]] ? letterCodd[word[i]] + 1 : 1 : letterCeven[word[i]] = letterCeven[word[i]] ? letterCeven[word[i]] + 1 : 1;
        return Object.keys(letterCodd).sort((a,b) => a < b ? 1 : -1).map(k => letterCodd[k] + k).join('#') + Object.keys(letterCeven).sort((a,b) => a < b ? 1 : -1).map(k => letterCeven[k] + k).join('#');
    }
    
    for(let i in words) differentGroup[genGroup(words[i])] = true;
    
    return Object.keys(differentGroup).length;
};