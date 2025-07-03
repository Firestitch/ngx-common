import { CurrencyPipe } from '@angular/common';

import { round } from '../../util/round';


export function currency(
  amount,
  precision: [number, number] | number = [2,10],
  currencyCode: string = 'USD',
  locale: string = 'en-US',
) {
  if(amount === null || amount === undefined) {
    return '';
  }

  const digitsInfo = Array.isArray(precision) ? precision : [precision, precision];
  amount = round(amount, digitsInfo[1]);

  const formatted = new CurrencyPipe(locale)
    .transform(amount, currencyCode, 'symbol', `1.${digitsInfo[0]}-${digitsInfo[1]}`);

  return formatted.replace(/^[A-Z]{1,3}\$/, '$');
}
