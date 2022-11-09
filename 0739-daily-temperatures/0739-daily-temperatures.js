/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length;
    let stack = [], result = new Array(len);
    for(let i = len - 1; i > -1; i--) {
        while(stack.length !== 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) stack.pop();
        result[i] = stack[stack.length - 1] - i || 0;
        stack.push(i);
    }
    return result;
};