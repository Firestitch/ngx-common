import { Pipe, PipeTransform } from '@angular/core';
import { bytes } from '../../libs/format/bytes/bytes';

@Pipe({
  name: 'fsFormatBytes',
})
export class FsFormatBytesPipe implements PipeTransform {

  transform(value: number, decimals?, unit?: 'KB' | 'MB' | 'GB' | 'TB' | 'PB'): string {
    return bytes(value, decimals, unit);
  }
}
