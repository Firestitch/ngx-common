export function index(array, property) {
    var list = {};
    array.forEach(function (item, idx) {
        list[item[property]] = item;
    });
    return list;
}
//# sourceMappingURL=index.js.map