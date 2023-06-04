/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if(typeof object === 'string') return '"' + object + '"';
    if(typeof object !== 'object') return object;
    let result = '';
    if(Array.isArray(object)){
        result += '[';
        for(let i = 0; i < object.length - 1; i++) {
            result += jsonStringify(object[i]) + ',';
        }
        if(object.length > 0){
            result += jsonStringify(object[object.length - 1]);
        }
        return result +']';
    }
    if(object === null) return null;
    result += '{';
    const arr = Object.keys(object);
    for(let i = 0; i < arr.length - 1; i++){
        result += '"' + arr[i] + '"' + ':';
        result += jsonStringify(object[arr[i]]) + ',';
    }
    if(arr.length > 0) {
        result += '"' + arr[arr.length - 1] + '":';
        result += jsonStringify(object[arr[arr.length - 1]]);
    }
    return result + '}';
};