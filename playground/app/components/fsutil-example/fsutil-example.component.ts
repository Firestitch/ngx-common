import {Component} from '@angular/core';
import {
  guid,
  uuid,
  boolean,
  length,
  isEmpty,
  isNumeric,
  isClass
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
import { of } from "rxjs/observable/of";
import { delay } from 'rxjs/operators';
import { QueueProcessor } from '../../../../src/util/queue-processor/queue-processor';

@Component({
  selector: 'fsutil-example',
  templateUrl: 'fsutil-example.component.html'
})
export class FsUtilExampleComponent {

  examples = [];
  pipes = [];
  queue = new QueueProcessor();

  public queueForm = {
    name: '',
    delay: 0
  };

  constructor() {
    this.examples = [
      {
        name: 'GUID',
        code: `import { guid } from '@firestitch/common/util';\nguid()`,
        result: guid()
      },
      {
        name: 'UUID',
        code: `import { uuid } from '@firestitch/common/util';\nuuid()`,
        result: uuid()
      },
      {
        name: 'Is Empty Array',
        code: `import { isEmpty } from '@firestitch/common/util';\nisEmpty([])`,
        result: isEmpty([])
      },
      {
        name: 'Is Numeric',
        code: `import { isNumeric } from '@firestitch/common/util';\nisNumeric(123)`,
        result: isNumeric(123)
      },
      {
        name: 'Is Class',
        code: `import { isClass } from '@firestitch/common/util';\nisClass(new Date(),'Date')`,
        result: isClass(new Date(),'Date')
      },
      {
        name: 'Boolean',
        code: `import { boolean } from '@firestitch/common/util';\nboolean('test')`,
        result: boolean('test')
      },
      {
        name: 'Length for Array or Object keys',
        code: `import { length } from '@firestitch/common/util';\nlength({a: 1, b: 2})`,
        result: length({a: 1, b: 2})
      },
      {
        name: 'Debounce',
        code: `import { debounce } from '@firestitch/common/util';\nboolean(func, wait, immediate)`
      },
      {
        name: 'Resolve for Promises',
        code: `import { resolve } from '@firestitch/common/util';\nresolve(promise, defaults)`
      },
      {
        name: 'JSON stringify',
        code: `import { stringify } from '@firestitch/common/util';\nstringify(json)`
      },
      {
        name: 'Throttle for functions',
        code: `import { throttle } from '@firestitch/common/util';\nthrottle(func, wait)`
      },
      {
        name: 'Get value from object or default',
        code: `import { value } from '@firestitch/common/util';\nvalue(object, key, def)`
      }
    ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    });

    this.pipes['isEmpty'] = '<span *ngIf="{}|fsUtilIsEmpty">Is Empty</span>';
    this.pipes['isNotEmpty'] = '<span *ngIf="{ key: \'value\' }|fsUtilIsNotEmpty">Is Not Empty</span>';
  }


  public addQueueOperation() {
    this.queue.push(this.queueForm.name, of(1).pipe(
      delay(this.queueForm.delay || 0)
    )).subscribe(() => {
      console.log('Operation is done');
    });

  }
}
