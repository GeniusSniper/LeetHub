/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let obj = {};
    for(let i = 0; i < s1.length; i++) obj[s1[i]] = obj[s1[i]] ? obj[s1[i]] + 1 : 1;
    let left = 0, right = 0, count = {};
    while(right <= s2.length) {
        if(right - left === s1.length) {
            if(Object.keys(obj).every(k => obj[k] === count[k] )) return true;
            count[s2[left]] = count[s2[left]] - 1;
            left++;
        }
        count[s2[right]] = count[s2[right]] ? count[s2[right]] + 1 : 1;
        right++;
    }
    return false;
};