import { isNumeric } from '../../../libs';

export function bytes(bytes: number, decimals?: number, unit?: 'KB' | 'MB' | 'GB' | 'TB' | 'PB') {
  if (!bytes) { 
    return '0 MB'; 
  }
  const e = typeof unit === 'string' ?
    'KMGTP'.indexOf(unit.replace('B', '')) + 1 :
    Math.floor(Math.log(bytes) / Math.log(1024));

  if(!isNumeric(decimals)) {
    decimals = (bytes / 1024) > 1000 ? 2 : 0;
  }

  return `${(bytes / Math.pow(1024, e))
    .toFixed(decimals)}`
    .replace(/\.00/, '')
    + ' '
    + (e ? ' KMGTP'.charAt(e) : '') + 'B';
}
