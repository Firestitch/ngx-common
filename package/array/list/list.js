export function list(array, property, index) {
    if (index === void 0) { index = null; }
    var resultList = index ? {} : [];
    array.forEach(function (item, idx) {
        if (index) {
            resultList[item[index]] = item[property];
        }
        else {
            resultList.push(item[property]);
        }
    });
    return resultList;
}
//# sourceMappingURL=list.js.map