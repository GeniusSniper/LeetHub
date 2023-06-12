/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let dict = dictory(words), myset = new Set();
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            checkword(i, j);
        }
    }
    function checkword(i, j, cache = {}, temp = dict){
        if(i < 0 || j < 0 || i >= board.length || j >= board[i].length) return;
        let word = temp[board[i][j]];
        if(!word || cache[i + '#' + j]) return ;
        cache[i + '#' + j] = true;
        if(word['isword']) myset.add(word['isword']);
        checkword(i + 1, j, cache, word);
        checkword(i, j + 1, cache, word);
        checkword(i - 1, j, cache, word);
        checkword(i, j - 1, cache, word);
        cache[i + '#' + j] = false;
        return;
    }
    
    return [...myset];
};


function dictory(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let temp = obj;
        for(let j = 0; j < word.length; j++) {
            if(!temp[word[j]]) {
                temp[word[j]] = {};
            }
            temp = temp[word[j]];
        }
        temp['isword'] = word;
    }
    return obj;
}