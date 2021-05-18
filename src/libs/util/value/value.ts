export function value(object, key, def) {

  if (typeof object === 'object' || Array.isArray(object)) {

    if (object.hasOwnProperty(key)) {
      return object[key];
    }
  }

  return def;
}
