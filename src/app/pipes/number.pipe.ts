import { Pipe, PipeTransform } from '@angular/core';
import { number } from '../../libs/format/number/number';

@Pipe({
  name: 'fsFormatNumber'
})
export class FsFormatNumberPipe implements PipeTransform {

  transform(value, decimals?): string {
    return number(value, decimals);
  }
}
