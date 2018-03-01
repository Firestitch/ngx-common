import {Component} from '@angular/core';
import {FsUtil} from '../../../../src/services/fsutil.service';
import {
  guid,
  uuid,
  boolean,
  length,
  isEmpty,
  isNumeric,
} from '../../../../src/util';

import {
  toInteger,
  toFinite,
  toString,
  isInteger,
  isArray,
  isObject,
  isArrayLikeObject,
} from 'lodash';

@Component({
  selector: 'fsutil-example',
  templateUrl: 'fsutil-example.component.html',
  styleUrls: ['fsutil-example.component.css']
})
export class FsUtilExampleComponent {

  examples = [];

  constructor(public FsUtil: FsUtil) {
    this.examples = [
      {
        name: 'GUID',
        deprecatedCode: 'FsUtil.guid()',
        code: `
          import { guid } from '@firestitch/common/util'; \n
          guid()
        `,
        result: guid()
      },
      {
        name: 'UUID',
        deprecatedCode: 'FsUtil.uuid()',
        code: `
          import { uuid } from '@firestitch/common/util'; \n
          uuid()
        `,
        result: uuid()
      },
      {
        name: 'Is Empty Array',
        deprecatedCode: 'FsUtil.isEmpty([])',
        code: `
          import { isEmpty } from '@firestitch/common/util'; \n
          isEmpty([])
        `,
        result: isEmpty([])
      },
      {
        name: 'Is Numeric',
        deprecatedCode: 'FsUtil.isNumeric(123)',
        code: `
          import { isNumeric } from '@firestitch/common/util'; \n
          isNumeric(123)
        `,
        result: isNumeric(123)
      },
      {
        name: 'Is Class',
        deprecatedCode: 'FsUtil.isClass(class)',
        code: `
          import { isClass } from '@firestitch/common/util'; \n
          isClass(class)
        `
      },
      {
        name: 'Boolean',
        deprecatedCode: 'FsUtil.boolean(123)',
        code: `
          import { boolean } from '@firestitch/common/util'; \n
          boolean('test')
        `,
        result: boolean('test')
      },
      {
        name: 'Debounce',
        deprecatedCode: 'FsUtil.debounce(func, wait, immediate)',
        code: `
          import { debounce } from '@firestitch/common/util'; \n
          boolean(func, wait, immediate)
        `
      },
      {
        name: 'Length for Array or Object keys',
        deprecatedCode: 'FsUtil.length({a: 1, b: 2})',
        code: `
          import { length } from '@firestitch/common/util'; \n
          length({a: 1, b: 2})
        `,
        result: length({a: 1, b: 2})
      },
      {
        name: 'Resolve for Promises',
        deprecatedCode: 'FsUtil.resolve(promise, defaults)',
        code: `
          import { resolve } from '@firestitch/common/util'; \n
          resolve(promise, defaults)
        `
      },
      {
        name: 'JSON stringify',
        deprecatedCode: 'FsUtil.stringify(json)',
        code: `
          import { stringify } from '@firestitch/common/util'; \n
          stringify(json)
        `
      },
      {
        name: 'Throttle for functions',
        deprecatedCode: 'FsUtil.throttle(func, wait)',
        code: `
          import { throttle } from '@firestitch/common/util'; \n
          throttle(func, wait)
        `
      },
      {
        name: 'Get value from object or default',
        deprecatedCode: 'FsUtil.value(object, key, def)',
        code: `
          import { value } from '@firestitch/common/util'; \n
          value(object, key, def)
        `
      },
      {
        name: 'Int',
        deprecatedCode: 'FsUtil.int(\'123\')',
        code: `
          import { toInteger } from 'lodash'; \n
          toInteger(\'123\')
        `,
        result: toInteger('123')
      },
      {
        name: 'Float',
        deprecatedCode: 'FsUtil.float(\'54.66\')',
        code: `
          import { toFinite } from 'lodash'; \n
          toFinite(\'54.66\')
        `,
        result: toFinite('54.66')
      },
      {
        name: 'String',
        deprecatedCode: 'FsUtil.string(123)',
        code: `
          import { toString } from 'lodash'; \n
          toString(123)
        `,
        result: toString(123)
      },
      {
        name: 'Is Array',
        deprecatedCode: 'fsUtil.isArray([])',
        code: `
          import { isArray } from 'lodash'; \n
          isArray([])
        `,
        result: isArray([])
      },
      {
        name: 'Is Object',
        deprecatedCode: 'FsUtil.isObject({})',
        code: `
          import { isObject } from 'lodash'; \n
          isObject({})
        `,
        result: isObject({})
      },
      {
        name: 'Is Array Like Object',
        deprecatedCode: 'FsUtil.isObject({})',
        code: `
          import { isArrayLikeObject } from 'lodash'; \n
          isArrayLikeObject([])
        `,
        result: isArrayLikeObject([])
      },
      {
        name: 'Is Int',
        deprecatedCode: 'FsUtil.isInt(123)',
        code: `
          import { isInteger } from 'lodash'; \n
          isInteger(123)
        `,
        result: isInteger(123)
      }
    ];


    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    })
  }

}
