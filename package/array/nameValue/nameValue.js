export function nameValue(array, name, value) {
    const list = [];
    if (name || value) {
        const nameFn = typeof name === 'function' ? name : function (item) {
            return item[name];
        };
        const valueFn = typeof value === 'function' ? value : function (item) {
            return item[value];
        };
        array.forEach(function (item) {
            list.push({ name: nameFn(item), value: valueFn(item) });
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