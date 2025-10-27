import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

import { currency } from '../../libs/format/currency/currency';


@Pipe({
    name: 'fsFormatCurrency',
    standalone: true,
})
export class FsFormatCurrencyPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) public locale: string) {  }

  public transform(
    amount,
    precision: [number, number] | number = 2,
    currencyCode?: string,
  ): string {
    return currency(amount, precision, currencyCode);
  }

}
