/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [], result = parseInt(tokens[0]);
    for(let i = 1; i < tokens.length; i++) {
        switch(tokens[i]) {                
            case '+':
                result += stack.pop();
                break;
            case '-':
                result = stack.pop() - result;
                break;
            case '*':
                result *= stack.pop();
                break;
            case '/':
                result = parseInt(stack.pop() / result);
                break;
            default:
                stack.push(result);
                result = parseInt(tokens[i]);
                break;
        }
    }
    return result;
};