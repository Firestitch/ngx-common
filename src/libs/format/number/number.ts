import { isNumeric, round } from '../../util';

export function number(value, decimals?) {
  if(isNumeric(decimals)) {
    value = round(value, decimals);
  }

  return Number(value || 0).toLocaleString(undefined, { maximumFractionDigits: decimals });
}
