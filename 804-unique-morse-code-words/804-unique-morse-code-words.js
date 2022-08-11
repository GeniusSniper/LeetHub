/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let differentWays = {}, 
        morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    for(let i in words) {
        let word = '';
        for(let j in words[i]) word += morseCode[words[i][j].charCodeAt() - 97];
        differentWays[word] = true;
    }
    
    return Object.values(differentWays).length;
};