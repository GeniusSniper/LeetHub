/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let typesOfCandy = {};
    for(let candy in candyType) typesOfCandy[candyType[candy]] = typesOfCandy[candyType[candy]] ? typesOfCandy[candyType[candy]] + 1 : 1;
    let candyLen = parseInt(candyType.length / 2), typeOfCandyLen = Object.keys(typesOfCandy).length;
    return typeOfCandyLen > candyLen ? candyLen : typeOfCandyLen;
};