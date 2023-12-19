export function round(num, decimalPlaces = 0) {
  num = parseFloat(parseFloat(num).toPrecision(Number.MAX_SAFE_INTEGER.toString().length - 1));
  const p = Math.pow(10, decimalPlaces);

  return Math.round(num * p) / p;
}
