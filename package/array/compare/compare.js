export function compare(query, item) {
    var value = true;
    for (var key in query) {
        value = value && item[key] == query[key];
    }
    return value;
}
//# sourceMappingURL=compare.js.map