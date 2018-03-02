import { Pipe, PipeTransform } from '@angular/core';
import { stringify, guid } from '../util';

@Pipe({
  name: 'fsUtilStringify'
})
export class FsUtilStringifyPipe implements PipeTransform {

  constructor() {}

  transform(value: any): string {
    return stringify(value);
  }
}


@Pipe({
  name: 'fsUtilGuid'
})
export class FsUtilGuidPipe implements PipeTransform {
  constructor() {}

  transform(): string {
    return guid();
  }
}
