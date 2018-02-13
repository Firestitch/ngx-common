import { FsUtil } from './fsutil.service';
export declare class FsValidate {
    private fsUtil;
    constructor(fsUtil: FsUtil);
    phone(value: any): boolean;
    email(value: any): boolean;
}
