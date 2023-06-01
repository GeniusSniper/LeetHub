/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    return new Promise((res) => {
        let i = 0, inProgress = 0;
        function callback() {
            if(i >= functions.length && inProgress === 0) res();
            while(i < functions.length && inProgress < n) {
                functions[i++]().then(() => {
                    inProgress--;
                    callback();
                })
                inProgress++;
            }
        }
        callback();
    })
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */