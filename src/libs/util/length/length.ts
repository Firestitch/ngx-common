import { isObject, isArray } from 'lodash-es'

export function length(object) {
  if (isObject(object)) {
    return Object.keys(object).length;
  }

  if (isArray(object)) {
    return object.length;
  }

  return 0;
}
