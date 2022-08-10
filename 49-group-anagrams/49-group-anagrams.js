/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let ans = {};

    function findChar(str) {
        let charC = '', obj = {};
        for(let i = 0; i < str.length; i++) {
            obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
        }

        let arr = Object.keys(obj).sort( (a, b) => a < b ? 1 : -1);
        for(let i = 0; i < arr.length; i++) charC += obj[arr[i]] + arr[i];
        return charC;
    }

    for(let i = 0; i < strs.length; i++) {
        let charC = findChar(strs[i]);
        ans[charC] ? ans[charC].push(strs[i]) : ans[charC] = [strs[i]];
    }
    return Object.values(ans);
};