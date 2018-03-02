export function list(array, property, index = null) {
    const resultList = index ? {} : [];
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