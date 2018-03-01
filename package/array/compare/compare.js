export function compare(query, item) {
    let value = true;
    for (const key in query) {
        value = value && item[key] == query[key];
    }
    return value;
}
//# sourceMappingURL=compare.js.map