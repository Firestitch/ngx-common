export function ordinalNumber(value: any): string {
  value = String(value);

  const index = value.match`1?.$`;
  const endings = [, 'st', 'nd', 'rd'];
  const ending = endings[index] || 'th';

  return value + ending;
}
