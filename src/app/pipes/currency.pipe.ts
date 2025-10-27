import { LOCALE_ID, Pipe, PipeTransform, inject } from '@angular/core';

import { currency } from '../../libs/format/currency/currency';


@Pipe({
    name: 'fsFormatCurrency',
    standalone: true,
})
export class FsFormatCurrencyPipe implements PipeTransform {
  locale = inject(LOCALE_ID);


  public transform(
    amount,
    precision: [number, number] | number = 2,
    currencyCode?: string,
  ): string {
    return currency(amount, precision, currencyCode);
  }

}
