import { Component } from '@angular/core';
import { FsMath } from './../../../../src/services/fsmath.service';

@Component({
  selector: 'fsmath-example',
  templateUrl: 'fsmath-example.component.html',
  styleUrls: [ 'fsmath-example.component.css' ]
})
export class FsMathExampleComponent {

  examples = [];
  constructor(public FsMath: FsMath) {
    this.examples = [ {  name: 'Round',
                          code: "FsMath.round(10.53,1)",
                          result: FsMath.round(10.53,1) }
                      ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    })
  }

}
