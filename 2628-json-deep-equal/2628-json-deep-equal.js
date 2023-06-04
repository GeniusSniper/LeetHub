/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    if(Array.isArray(o1) !== Array.isArray(o2)) return false;
    if(typeof o1 !== typeof o2) return false;
    if(Array.isArray(o1)){
        if(o1.length !== o2.length) return false;
        for(let i = 0;i < o1.length; i++){
            if(!areDeeplyEqual(o1[i], o2[i]))
                return false;
        }
        return true;
    }
    if(typeof o1 === 'object'){
        if(!o1 || !o2) return o1 === o2;
        const keys1 = Object.keys(o1), keys2 = Object.keys(o2);
        if(keys1.length !== keys2.length) return false;
        for(let i = 0; i < keys1.length; i++) {
            if(!areDeeplyEqual(o1[keys1[i]], o2[keys1[i]])) 
                return false;
        }
        return true;
    }
    return o1 === o2;
};