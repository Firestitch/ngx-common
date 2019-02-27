import {Component} from '@angular/core';
import {
  guid,
  uuid,
  boolean,
  length,
  isEmpty,
  isNumeric,
  isClass
} from '@firestitch/common';

import {
  toInteger,
  toFinite,
  toString,
  isInteger,
  isArray,
  isObject,
  isArrayLikeObject,
} from 'lodash-es';

@Component({
  selector: 'fs-util-functions',
  templateUrl: './util-functions.component.html'
})
export class FsUtilFunctionsComponent {

  examples = [];

  constructor() {
    this.examples = [
      {
        name: 'GUID',
        code: `import { guid } from '@firestitch/common';\nguid()`,
        result: guid()
      },
      {
        name: 'GUID',
        code: `import { guid } from '@firestitch/common';\nguid('xxxx-xxxx-xxxx-xxxx-xxxx', { case: 'mixed', numbers: false })`,
        result: guid('xxxx-xxxx-xxxx-xxxx-xxxx', { case: 'mixed', numbers: false })
      },
      {
        name: 'UUID',
        code: `import { uuid } from '@firestitch/common';\nuuid()`,
        result: uuid()
      },
      {
        name: 'Is Empty Array',
        code: `import { isEmpty } from '@firestitch/common';\nisEmpty([])`,
        result: isEmpty([])
      },
      {
        name: 'Is Numeric',
        code: `import { isNumeric } from '@firestitch/common';\nisNumeric(123)`,
        result: isNumeric(123)
      },
      {
        name: 'Is Class',
        code: `import { isClass } from '@firestitch/common';\nisClass(new Date(),'Date')`,
        result: isClass(new Date(),'Date')
      },
      {
        name: 'Boolean',
        code: `import { boolean } from '@firestitch/common';\nboolean('test')`,
        result: boolean('test')
      },
      {
        name: 'Length for Array or Object keys',
        code: `import { length } from '@firestitch/common';\nlength({a: 1, b: 2})`,
        result: length({a: 1, b: 2})
      },
      {
        name: 'Debounce',
        code: `import { debounce } from '@firestitch/common';\nboolean(func, wait, immediate)`
      },
      {
        name: 'Resolve for Promises',
        code: `import { resolve } from '@firestitch/common';\nresolve(promise, defaults)`
      },
      {
        name: 'JSON stringify',
        code: `import { stringify } from '@firestitch/common';\nstringify(json)`
      },
      {
        name: 'Throttle for functions',
        code: `import { throttle } from '@firestitch/common';\nthrottle(func, wait)`
      },
      {
        name: 'Get value from object or default',
        code: `import { value } from '@firestitch/common';\nvalue(object, key, def)`
      }
    ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    });
  }
}
