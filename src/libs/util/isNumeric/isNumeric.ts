export function isNumeric(value) {
  const str = String(value);
  return str.length && !!str.match(/^-?\d*\.?\d*$/);
}
