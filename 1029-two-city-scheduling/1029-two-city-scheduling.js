/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let diff = [], sum = 0;
    for(let i = 0; i < costs.length; i++) diff.push({
                                                        cost: costs[i][1] - costs[i][0], 
                                                        a: costs[i][0],
                                                        b: costs[i][1]
                                                    });
    diff = diff.sort((a, b) => a['cost'] - b['cost']);
    for(let i = 0; i < diff.length; i++) i < diff.length / 2 ? sum += diff[i]['b'] : sum += diff[i]['a'];
    return sum;
};