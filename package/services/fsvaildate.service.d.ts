import { FsUtil } from './fsutil.service';
export declare class FsValidate {
    private fsUtil;
    constructor(fsUtil: FsUtil);
    /**
     * @deprecated use import { email } from @firestitch/common/validate; instead
    */
    phone(value: any): boolean;
    /**
      * @deprecated use import { email } from @firestitch/common/validate; instead
    */
    email(value: any): boolean;
}
