import { Component } from '@angular/core';
import { number } from '../../../../src/format';
import { FsUtil } from '../../../../src';

@Component({
  selector: 'fsformat-example',
  templateUrl: 'fsformat-example.component.html'
})
export class FsFormatExampleComponent {

  examples = [];
  pipes = [];

  constructor(fsUtil: FsUtil) {
    console.log(fsUtil.guid());
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

    this.pipes['number'] = '{{42397803.23987|fsFormatNumber:2}}';
  }

}
