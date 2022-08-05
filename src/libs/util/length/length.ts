export function length(object) {
  if (Array.isArray(object)) {
    return object.length;
  }

  if (object instanceof Object) {
    return Object.keys(object).length;
  }

  return 0;
}
