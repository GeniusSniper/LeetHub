/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let typesOfCandy = {};
    for(let candy in candyType) typesOfCandy[candyType[candy]] = true;
    let candyLen = parseInt(candyType.length / 2), typeOfCandyLen = Object.keys(typesOfCandy).length;
    return typeOfCandyLen > candyLen ? candyLen : typeOfCandyLen;
};