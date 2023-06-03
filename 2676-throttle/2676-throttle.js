/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  let nextargs, throttled = false;
  return function(...args) {
      if(throttled) {
          nextargs = args;
      } else {
          fn(...args);
          throttled = true;
          setTimeout(helper, t);
      }
      
      function helper() {
          if(nextargs){
              throttled = true;
              fn(...nextargs);
              nextargs = null;
              setTimeout(helper, t);
          } else {
              throttled = false;
          }
      }
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */