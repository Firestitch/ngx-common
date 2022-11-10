import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { currency } from '../../libs/format/currency/currency';


@Pipe({
  name: 'fsFormatCurrency'
})
export class FsFormatCurrencyPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) public locale: string) {  }

  transform(amount, precision = 2, currencyCode?): string {
    return currency(amount, precision, currencyCode);
  }

}
