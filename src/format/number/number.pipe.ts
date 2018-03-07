import { Pipe, PipeTransform } from '@angular/core';
import { number } from './number';

@Pipe({
  name: 'fsFormatNumber'
})
export class FsFormatNumberPipe implements PipeTransform {

  transform(value, decimals?): string {
    return number(value, decimals);
  }
}
