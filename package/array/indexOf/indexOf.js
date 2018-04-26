import { compare } from '../compare';
export function indexOf(array, query) {
    if (typeof query !== 'function') {
        var queryObj_1 = query;
        query = function (item) {
            return compare(queryObj_1, item);
        };
    }
    for (var i = 0, len = array.length; i < len; i++) {
        if (query(array[i])) {
            return i;
        }
    }
    return -1;
}
//# sourceMappingURL=indexOf.js.map