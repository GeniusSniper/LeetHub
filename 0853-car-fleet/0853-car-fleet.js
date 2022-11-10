/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let join = [], result = [];
    for(let i = 0; i < position.length; i++){
        join.push({
            1: position[i],
            2: speed[i],
            3: (target - position[i]) / speed[i]
        })
    }
    join = join.sort( (a,b) => a['1'] - b['1']);
    for(let i = join.length - 1; i > -1; i--) {
        if(result.length === 0) {
            result.push(join[i]);
            continue;
        }
        if(join[i]['3'] > result[result.length - 1]['3']) result.push(join[i]);        
    }
    
    return result.length;
};