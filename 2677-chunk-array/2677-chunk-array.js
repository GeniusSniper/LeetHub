/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let result = [], sc = 0, temp = [];
    for(let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        sc++;
        if(sc === size) {
            result.push(temp);
            sc = 0;
            temp = [];
        }
    }
    if(temp.length > 0) result.push(temp);
    return result;
};
