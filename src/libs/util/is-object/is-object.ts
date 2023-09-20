export function isObject(value): boolean {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
