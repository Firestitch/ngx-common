export function sort(array, query, reverse) {
    if (reverse === void 0) { reverse = false; }
    if (typeof query !== 'function') {
        var queryStr_1 = query;
        query = function (a, b) {
            if (reverse) {
                if (a[queryStr_1] < b[queryStr_1]) {
                    return 1;
                }
                else if (a[queryStr_1] > b[queryStr_1]) {
                    return -1;
                }
            }
            else {
                if (a[queryStr_1] > b[queryStr_1]) {
                    return 1;
                }
                else if (a[queryStr_1] < b[queryStr_1]) {
                    return -1;
                }
            }
            return 0;
        };
    }
    array.sort(query);
    return array;
}
//# sourceMappingURL=sort.js.map