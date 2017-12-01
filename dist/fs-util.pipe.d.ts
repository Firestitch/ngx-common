import { PipeTransform } from '@angular/core';
import { FsUtil } from './fs-util.service';
export declare class FsUtilStringifyPipe implements PipeTransform {
    private FsUtil;
    constructor(FsUtil: FsUtil);
    transform(value: any): string;
}
export declare class FsUtilGuidPipe implements PipeTransform {
    FsUtil: FsUtil;
    constructor(FsUtil: FsUtil);
    transform(): string;
}
