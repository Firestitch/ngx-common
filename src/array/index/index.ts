export function index(array, property) {
  const list = {};
  
  array.forEach(function (item, idx) {
    list[item[property]] = item;
  });
  
  return list;
}
