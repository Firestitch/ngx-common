export function isClass(value, cls) {

  if (typeof value === 'object') {

    if (typeof cls === 'string') {

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
