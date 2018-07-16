import { Component } from '@angular/core';
import { number } from '../../../../src/format';

@Component({
  selector: 'fsformat-functions',
  templateUrl: 'fsformat-functions.component.html'
})
export class FsFormatFunctionsComponent {

  examples = [];

  constructor() {

    this.examples = [
      {
        name: 'Number',
        code: `import { number } from '@firestitch/common/format';\nnumber(42397803.23987, 2)`,
        result: number(42397803.23987, 2)
      }
    ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    });
  }

}
