import { toString } from 'lodash-es';

export function boolean(value) {
  return toString(value).toLowerCase() !== 'false' && !!value;
}
