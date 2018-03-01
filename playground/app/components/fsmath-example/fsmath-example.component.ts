import {Component} from '@angular/core';
import {FsMath} from './../../../../src/services/fsmath.service';

import {round} from '../../../../src/math';

@Component({
  selector: 'fsmath-example',
  templateUrl: 'fsmath-example.component.html',
  styleUrls: ['fsmath-example.component.css']
})
export class FsMathExampleComponent {

  examples = [];

  constructor(public FsMath: FsMath) {
    this.examples = [
      {
        name: 'Round',
        deprecatedCode: 'FsMath.round(10.53,1)',
        code: `
          import { round } from '@firestitch/common/math'; \n
          round(10.53, 1)
        `,
        result: round(10.53, 1)
      }
    ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    })
  }

}
