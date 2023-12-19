import { CurrencyPipe } from '@angular/common';

import { round } from '../../util/round';


export function currency(
  amount,
  precision: [number, number] | number = [2,10],
  currencyCode: string = 'USD',
  locale: string = 'en-US',
) {
  const digitsInfo = Array.isArray(precision) ? precision : [precision, precision];
  amount = round(amount, digitsInfo[1]);

  return new CurrencyPipe(locale)
    .transform(amount, currencyCode, 'symbol', `1.${digitsInfo[0]}-${digitsInfo[1]}`);
}
