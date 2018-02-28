import { Injectable } from '@angular/core';
import { FsUtil } from './fsutil.service';

@Injectable()
export class FsValidate {

    constructor(private fsUtil: FsUtil) { }

    /**
     * @deprecated use import { email } from @firestitch/common/validate; instead
    */
    phone(value) {
        const valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
        return valid || !String(value).length;
    }

    /**
      * @deprecated use import { email } from @firestitch/common/validate; instead
    */
    email(value) {
        return !!this.fsUtil.string(value).match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
}
