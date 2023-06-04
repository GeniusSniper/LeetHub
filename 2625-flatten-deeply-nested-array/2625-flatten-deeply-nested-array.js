/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let result = [];
    function flatten(node, j) {
        for(let i = 0; i < node.length; i++) {
            if(Array.isArray(node[i]) && j !== 0) {
                flatten(node[i], j - 1);
            } else {
                result.push(node[i]);
            }
        }
    }
    flatten(arr, n);
    return result;
};