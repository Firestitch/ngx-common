export function index(array, indexKey, valueKey = null) {
  const list = {};
  
  array.forEach(function (item) {
    list[item[indexKey]] = valueKey ? item[valueKey] : item;
  });
  
  return list;
}
