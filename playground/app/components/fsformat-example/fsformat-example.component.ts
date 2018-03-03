import {Component} from '@angular/core';
import {
  FsFormatNumber
} from '../../../../src/format/number/pipe';

import {
  number
} from '../../../../src/format/number';

@Component({
  selector: 'fsformat-example',
  templateUrl: 'fsformat-example.component.html'
})
export class FsFormatExampleComponent {

  examples = [];

  constructor() {
    this.examples = [
      {
        name: 'Number',
        code: `import { number } from '@firestitch/common/format';\nformat(42397803.23987,2)`,
        result: number(42397803)
      }
    ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    })
  }

}
