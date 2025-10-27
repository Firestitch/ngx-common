import { Pipe, PipeTransform } from '@angular/core';
import { truncate } from '../../libs/format/truncate/truncate';


@Pipe({
    name: 'fsFormatTruncate',
    standalone: true
})
export class FsFormatTruncatePipe implements PipeTransform {

  constructor() {  }

  transform(value, limit?, completeWords?, ellipsis?): string {
    return truncate(value, limit, completeWords, ellipsis);
  }

}
