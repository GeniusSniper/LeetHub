/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let results = {};
    for(let i = 0; i < cpdomains.length; i++) {
        let domain = cpdomains[i].split(' ');
        let times = parseInt(domain[0]), domains = domain[1].split('.');
        domain = domains[domains.length - 1];
        results[domain] = results[domain] ? results[domain] + times : times;        
        for(let j = domains.length - 2; j > -1; j--) {
            domain = domains[j] + '.' + domain;
            results[domain] = results[domain] ? results[domain] + times : times;        
        }
    }
    
    return Object.keys(results).map(key => results[key] + ' ' + key);
};