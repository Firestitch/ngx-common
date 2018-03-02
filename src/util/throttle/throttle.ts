export function throttle(func, wait) {
  let waiting = false;                  	// Initially, we're not waiting
  return function () {               		// We return a throttled function
    if (!waiting) {                   	// If we're not waiting
      func.apply(null, arguments);     // Execute users function
      waiting = true;               	// Prevent future invocations
      setTimeout(function () {   		// After a period of time
        waiting = false;          	// And allow future invocations
      }, wait);
    }
  }
}
