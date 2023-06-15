/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let obj = {}, result = -1;
    for(let i = 0; i < trust.length; i++) {
        obj[trust[i][0]] ? obj[trust[i][0]].push(trust[i][1]) : obj[trust[i][0]] = [trust[i][1]];
    }
    for(let i = 1; i <= n; i++) {
        if(obj[i]) continue;
        if(checkJudge(i)){
            if(result !== -1) return -1;
            result = i;
        }
    }
    function checkJudge(a){
        for(let i = 1; i <= n; i++){
            if(i === a) continue;
            if(!obj[i]) return false;
            if(!obj[i].includes(a)) return false;
        }
        return true;
    }
    return result;
};