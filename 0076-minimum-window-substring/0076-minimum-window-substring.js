/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let so = {}, to = {}, l = 0, min ='';
    for(let i = 0; i < t.length; i++) {
        to[t[i]] = to[t[i]] ? to[t[i]] + 1 : 1;
        so[t[i]] = 0;
    }
    let k = Object.keys(to).length, need = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(!to[s[i]]) continue;
        so[s[i]] = so[s[i]] + 1;
        if(so[s[i]] === to[s[i]]) need++;
        while(k === need) {
            if(!min || i + 1 - l < min.length) min = s.substring(l, i + 1);
            so[s[l]] = so[s[l]] - 1;
            if(so[s[l]] < to[s[l]]) need--;
            l++;
        }
    }
    return min;
};
