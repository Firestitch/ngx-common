import { isObject, isString } from 'util';

export function isClass(value, cls) {

  if (isObject(value)) {

    if (isString(cls)) {

      if (value.constructor) {
        if (value.constructor.name === cls) {
          return true;
        }
      }

    } else {

      if (value instanceof cls) {
        return true;
      }
    }
  }

  return false;
}
