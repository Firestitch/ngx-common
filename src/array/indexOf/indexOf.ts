import { compare } from '../compare';
export function indexOf(array, query) {

  if (typeof query !== 'function') {
    const queryObj = query;
    query = (item) => {

      return compare(queryObj, item);
    }
  }

  for (let i = 0, len = array.length; i < len; i++) {
    if (query(array[i])) {
      return i;
    }
  }

  return -1;
}
