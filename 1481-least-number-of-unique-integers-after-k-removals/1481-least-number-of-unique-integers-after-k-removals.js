/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
/*
    store all the values into a set
    then sort the set by its value
    then remove k value return len of the set
*/
var findLeastNumOfUniqueInts = function(arr, k) {
    let myset = {};
    for(let i = 0;i < arr.length; i++){
        myset[arr[i]] ? myset[arr[i]]++ : myset[arr[i]] = 1;
    }
    let sortedKeys = Object.keys(myset).sort( (a,b) => myset[a] - myset[b] );
    for(let i = 0; i < sortedKeys.length; i++){
        let tempval = myset[sortedKeys[i]];
        if(k < tempval) return sortedKeys.length - i;
        k -= tempval;
    }
    return 0;
};