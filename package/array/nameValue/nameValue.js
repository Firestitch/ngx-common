export function nameValue(array, name, value) {
    var list = [];
    if (name || value) {
        var nameFn_1 = typeof name === 'function' ? name : function (item) {
            return item[name];
        };
        var valueFn_1 = typeof value === 'function' ? value : function (item) {
            return item[value];
        };
        array.forEach(function (item) {
            list.push({ name: nameFn_1(item), value: valueFn_1(item) });
        });
    }
    else {
        array.forEach(function (n, v) {
            list.push({ name: n, value: v });
        });
    }
    return list;
}
//# sourceMappingURL=nameValue.js.map