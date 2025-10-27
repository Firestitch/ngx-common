import { Pipe, PipeTransform } from '@angular/core';

import { guid } from '../../libs/util/guid/guid';
import { isEmpty } from '../../libs/util/is-empty/is-empty';
import { stringify } from '../../libs/util/stringify/stringify';


@Pipe({
    name: 'fsUtilStringify',
    standalone: true,
})
export class FsUtilStringifyPipe implements PipeTransform {

  constructor() {}

  transform(value: any): string {
    return stringify(value);
  }
}


@Pipe({
    name: 'fsUtilGuid',
    standalone: true,
})
export class FsUtilGuidPipe implements PipeTransform {
  constructor() {}

  transform(): string {
    return guid();
  }
}

@Pipe({
    name: 'fsUtilIsEmpty',
    standalone: true,
})
export class FsUtilIsEmptyPipe implements PipeTransform {

  transform(value): any {
    return isEmpty(value);
  }
}


@Pipe({
    name: 'fsUtilIsNotEmpty',
    standalone: true,
})
export class FsUtilIsNotEmptyPipe implements PipeTransform {

  transform(value): any {
    return !isEmpty(value);
  }
}
