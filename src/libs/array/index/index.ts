export function index(array, name, value = null) {
  const list = {};
  
  array.forEach(function (item) {
    list[item[name]] = value ? item[value] : item;
  });
  
  return list;
}
