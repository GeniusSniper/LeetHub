/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
    let myset = new Set();
    function searchKey(any, key = ''){
        if(typeof any === undefined) return;
        if(typeof any !== 'object' || any === null) return myset.add(key);
        if(key) key = key + '.';
        if(Array.isArray(any)){
            for(let i = 0; i < any.length; i++) {
                searchKey(any[i], key + i);
            }
        }
        const temp = Object.keys(any);
        for(let i = 0; i < temp.length; i++){
            searchKey(any[temp[i]], key + temp[i]);
        }
    }
    for(let i = 0; i < arr.length; i++) {
        searchKey(arr[i]);
    }
    let keys = [...myset].sort((a,b) => a < b ? -1 : 1);
    let result = new Array(arr.length + 1);
    result[0] = keys;
    for(let i = 1; i < result.length; i++) result[i] = [];
    for(let i = 0; i < keys.length; i++){
        let key = keys[i].split('.');
        for(let j = 0; j < arr.length; j++) {
            let temp = arr[j],  c = 0;
            while(c < key.length) {
                if(!(typeof temp === 'object' && temp !== null)) break;
                temp = temp[key[c++]];
            }
            if(temp === undefined || temp !== null && typeof temp === 'object' || c < key.length) temp = '';
            result[j + 1].push(temp);
        }
    }
    return result;
};