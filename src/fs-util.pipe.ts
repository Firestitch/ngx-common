import { Pipe, PipeTransform } from '@angular/core';
import { FsUtil } from './fs-util.service';

@Pipe({
  name: 'fsUtilStringify'
})
export class FsUtilStringifyPipe implements PipeTransform {

  constructor(private FsUtil: FsUtil) {}

  transform(value: any): string {
    return this.FsUtil.stringify(value);
  }
}


@Pipe({
  name: 'fsUtilGuid'
})
export class FsUtilGuidPipe implements PipeTransform {
  constructor(public FsUtil: FsUtil) {}

  transform(): string {
    return this.FsUtil.guid();
  }
}
