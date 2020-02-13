export function phone(value) {
  const valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}/.test(value);
  return valid || !String(value).length;
}
