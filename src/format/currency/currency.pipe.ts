import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { currency } from './currency';


@Pipe({
  name: 'fsFormatCurrency'
})
export class FsFormatCurrencyPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) public locale: string) {  }

  transform(amount, precision?, currencyCode?): string {
    return currency(amount, precision, currencyCode);
  }

}
