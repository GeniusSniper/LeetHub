/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let allWords = {}, uncommonword = {};
    s1.split(' ').forEach(word => {
        if(allWords[word]) {
            delete uncommonword[word];
        } else {
            allWords[word] = true;
            uncommonword[word] = word
        }
    })
    s2.split(' ').forEach(word => {
        if(allWords[word]) {
            delete uncommonword[word];
        } else {
            allWords[word] = true;
            uncommonword[word] = word;
        }
    })
    
    return Object.values(uncommonword);
};