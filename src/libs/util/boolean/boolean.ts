export function boolean(value) {
  return String(value).toLowerCase() !== 'false' && !!value;
}
