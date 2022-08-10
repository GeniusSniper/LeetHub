/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let ans = {};

    for (let i = 0; i < strs.length; i++) {
        const letters = new Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) letters[strs[i][j].charCodeAt() - 97]++;
        let charC = letters.join('#');
        ans[charC] ? ans[charC].push(strs[i]) : ans[charC] = [strs[i]];
    }
    return Object.values(ans);
};