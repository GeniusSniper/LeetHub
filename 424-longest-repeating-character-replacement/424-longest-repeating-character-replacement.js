/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        let cur = s[i], kc = k, c = 1;
        for(let j = i + 1; j < s.length; j++) {
            c++;
            if(cur === s[j]) continue;
            if(kc > 0) {
                kc--;
                continue;
            }
            c--;
            break;
        }
        c = Math.min(s.length, c + kc);
        count = Math.max(count, c);
    }
    return count;
};