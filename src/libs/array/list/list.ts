export function list(array, property, index = null) {
  const resultList: any = index ? {} : [];
  array.forEach(function (item, idx) {
    if (index) {
      resultList[item[index]] = item[property];
    } else {
      resultList.push(item[property]);
    }
  });
  return resultList;
}
