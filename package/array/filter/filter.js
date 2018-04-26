import { compare } from '../compare';
export function filter(array, query) {
    if (typeof query !== 'function') {
        var queryObj_1 = query;
        query = function (item) {
            return compare(queryObj_1, item);
        };
    }
    var isarray = Array.isArray(array);
    var list = isarray ? [] : {};
    if (isarray) {
        array.forEach(function (item, idx) {
            if (query(item)) {
                list.push(item);
            }
        });
    }
    else {
        Object.keys(array).forEach(function (key) {
            if (query(array[key])) {
                list[key] = array[key];
            }
        });
    }
    return list;
}
//# sourceMappingURL=filter.js.map