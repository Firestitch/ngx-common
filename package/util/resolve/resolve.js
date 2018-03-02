export function resolve(promise, defaults = []) {
    const result = defaults;
    return new Promise(resolve => {
        promise.then(function (data) {
            Object.keys(data).forEach(key => result[key] = data[key]);
            resolve(result);
        });
    });
}
//# sourceMappingURL=resolve.js.map