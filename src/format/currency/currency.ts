import { CurrencyPipe } from '@angular/common';


export function currency(amount, precision = 2, currencyCode = 'USD', locale = 'en-US') {
  return new CurrencyPipe(locale).transform(amount, currencyCode, 'symbol', `1.0-${precision}`);
}
