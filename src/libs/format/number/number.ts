export function number(value, decimals?) {
  return Number(value || 0).toLocaleString(undefined, { maximumFractionDigits: decimals });
}
