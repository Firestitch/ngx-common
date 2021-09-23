import { PipeTransform, Pipe } from '@angular/core';
import { ordinalNumber } from '../../libs/util/ordinal-number/ordinal-number';

@Pipe({
  name: 'fsFormatOrdinalNumber',
})
export class FsFormatOrdinalNumberPipe implements PipeTransform {

  public transform(value: any): string {
    return ordinalNumber(value);
  }

}
