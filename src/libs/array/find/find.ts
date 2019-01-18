import { filter } from '../filter';

export function find(array, query) {
  const data = filter(array, query);
  return data.length ? data[0] : null;
}
