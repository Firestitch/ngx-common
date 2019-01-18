import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '../../libs/util/stringify/stringify';
import { guid } from '../../libs/util/guid/guid';
import { isEmpty } from '../../libs/util/isEmpty/isEmpty';


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

@Pipe({
  name: 'fsUtilIsEmpty'
})
export class FsUtilIsEmptyPipe implements PipeTransform {

  transform(value): any {
    return isEmpty(value);
  }
}


@Pipe({
  name: 'fsUtilIsNotEmpty'
})
export class FsUtilIsNotEmptyPipe implements PipeTransform {

  transform(value): any {
    return !isEmpty(value);
  }
}
