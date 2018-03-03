export function number(value,decimals?) {
  return value.toLocaleString(undefined, {maximumFractionDigits:decimals});
}
