export function resolve(promise, defaults) {
    if (defaults === void 0) { defaults = []; }
    var result = defaults;
    return new Promise(function (resolve) {
        promise.then(function (data) {
            Object.keys(data).forEach(function (key) { return result[key] = data[key]; });
            resolve(result);
        });
    });
}
//# sourceMappingURL=resolve.js.map