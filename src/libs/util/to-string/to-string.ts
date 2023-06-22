export function toString(value): string {
  if(value === null || value === undefined) {
    return '';
  }

  return `${value}`;
}
