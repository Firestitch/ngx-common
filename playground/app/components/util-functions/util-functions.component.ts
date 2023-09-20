import {Component} from '@angular/core';
import {
  guid,
  uuid,
  length,
  isEmpty,
  isNumeric,
  isClass,
  round,
  clone,
  toString,
  isObject
} from '@firestitch/common';

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
        name: 'Is Object',
        code: `import { isObject } from '@firestitch/common';\isObject('{}')`,
        result: isObject({})
      },
      {
        name: 'Is Object (Array)',
        code: `import { isObject } from '@firestitch/common';\isObject('[]')`,
        result: isObject([])
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
      },
      {
        name: 'Round',
        code: `import { round } from '@firestitch/common';\nround(100.568,2)`,
        result: round(100.568, 2),
      },
      {
        name: 'Clone',
        code: `import { clone } from '@firestitch/common';\nclone({ date: new Date() })`,
        result: clone({ date: new Date() }),
      },
      {
        name: 'To String',
        code: `import { toString } from '@firestitch/common';\ntoString(1234)`,
        result: toString(1234),
      },
    ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    });
  }
}
