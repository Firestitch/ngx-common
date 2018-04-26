export function ksort(unordered) {
    Object.keys(unordered).sort().forEach(function (key) {
        var value = unordered[key];
        delete unordered[key];
        unordered[key] = value;
    });
}
//# sourceMappingURL=ksort.js.map