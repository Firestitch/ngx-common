import { compare } from '../compare';

export function filter(array, query) {

  if (typeof query !== 'function') {
    const queryObj = query;
    query = (item) => {
      return compare(queryObj, item);
    }
  }

  const isarray = Array.isArray(array);
  const list: any = isarray ? [] : {};
  if (isarray) {
    array.forEach(function (item, idx) {
      if (query(item)) {
        list.push(item);
      }
    });
  } else {
    Object.keys(array).forEach(key => {
      if (query(array[key])) {
        list[key] = array[key];
      }
    })
  }
  return list;
}
