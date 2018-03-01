export function sort(array, query, reverse = false) {
    if (typeof query !== 'function') {
        const queryStr = query;
        query = function (a, b) {
            if (reverse) {
                if (a[queryStr] < b[queryStr]) {
                    return 1;
                }
                else if (a[queryStr] > b[queryStr]) {
                    return -1;
                }
            }
            else {
                if (a[queryStr] > b[queryStr]) {
                    return 1;
                }
                else if (a[queryStr] < b[queryStr]) {
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