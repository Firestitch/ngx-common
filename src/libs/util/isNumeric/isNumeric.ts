import { toString } from 'lodash-es';

export function isNumeric(value) {
  const str = toString(value);
  return str.length && !!str.match(/^-?\d*\.?\d*$/);
}
