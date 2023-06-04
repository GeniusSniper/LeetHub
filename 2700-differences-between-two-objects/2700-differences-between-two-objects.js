/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(input1, input2) {
    if(input1 === undefined || input2 === undefined) return;
    if(typeof input1 !== 'object' || typeof input2 !== 'object' || input1 === null || input2 === null) {
        if(input1 === input2) return;
        return [input1, input2];
    }
    if(Array.isArray(input1) !== Array.isArray(input2)) return [input1, input2];
    let result = {};
    if(Array.isArray(input1)){
        for(let i = 0; i < input1.length; i++){
            let difference = objDiff(input1[i], input2[i]);
            if(difference === undefined) continue;
            if(Array.isArray(difference) && difference.length > 0 || Object.keys(difference).length > 0){
                result[i] = difference;
            }
        }
        return Object.keys(result).length > 0 ? result : undefined;
    }
    let keys = Object.keys(input1);
    for(let i = 0; i < keys.length; i++) {
        let difference = objDiff(input1[keys[i]], input2[keys[i]]);
        if(difference === undefined) continue;
        if(Array.isArray(difference) && difference.length > 0 || Object.keys(difference).length > 0){
            result[keys[i]] = difference;
        }
    }
    return Object.keys(result).length > 0 ? result : {};
};