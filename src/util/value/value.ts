import { isObject, isArray } from 'lodash';

export function value(object, key, def) {

  if (isObject(object) || isArray(object)) {

    if (object.hasOwnProperty(key)) {
      return object[key];
    }
  }

  return def;
}
