export function throttle(func, wait) {
    var waiting = false; // Initially, we're not waiting
    return function () {
        if (!waiting) {
            func.apply(null, arguments); // Execute users function
            waiting = true; // Prevent future invocations
            setTimeout(function () {
                waiting = false; // And allow future invocations
            }, wait);
        }
    };
}
//# sourceMappingURL=throttle.js.map