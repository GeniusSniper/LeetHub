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
    let sortedValues = Object.values(myset).sort((a,b) => a - b);
    for(let i = 0; i < sortedValues.length; i++){
        let tempval = sortedValues[i];
        if(k < tempval) return sortedValues.length - i;
        k -= tempval;
    }
    return 0;
};