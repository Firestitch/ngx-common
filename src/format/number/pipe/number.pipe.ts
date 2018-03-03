import { Pipe, PipeTransform } from '@angular/core';
import { number } from './../number';

@Pipe({
  name: 'fsFormatNumber'
})
export class FsFormatNumber implements PipeTransform {
 
  transform(value): string {
    return number(value);
  }
}
