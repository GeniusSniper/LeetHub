/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(p.length > s.length) return [];
    let answer = [], objP = objinput(p), objS = objinput(s.slice(0, p.length)), firstIndex = s[0];
    if(isEqual(objS, objP)) answer.push(0);

    for(let i = 1; i < s.length - p.length + 1; i++) {
        objS[firstIndex] = objS[firstIndex] - 1;
        firstIndex = s[i];
        objS[s[i + p.length - 1]] = objS[s[i + p.length - 1]] ? objS[s[i + p.length - 1]] + 1 : 1;

        if(isEqual(objS, objP)) answer.push(i);
    }

    return answer;
};

let isEqual = (a, b) => {
    return !Object.keys(b).some( k => b[k] !== a[k]);
}

let objinput = (input) => {
    let obj = {};
    for(let i = 0; i < input.length; i++) {
        obj[input[i]] = obj[input[i]] ? obj[input[i]] + 1 : 1;
    }

    return obj;
}