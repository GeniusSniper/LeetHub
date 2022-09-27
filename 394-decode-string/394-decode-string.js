/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let arr = [], str = '';
    for(let i = s.length - 1; i > -1; i--) {
        if(s[i] === ']') {
            arr.push(str);
            str = '';
        } else if(s[i] === '[') {
            let num = '';
            while(true) {
                i--;
                if(!s[i] || isNaN(parseInt(s[i]))) break;
                num += s[i];
            }
            i++;
            str = arr.pop() + str.repeat(parseInt(reverseStr(num)));
        } else {
            str += s[i];
        }
    }
    
    return reverseStr(str);
};

let reverseStr = str => {
    let s = '';
    for(let i = str.length - 1; i > -1; i--) s += str[i];
    return s;
}