import { ChangeDetectionStrategy, Component } from '@angular/core';

import { number } from '@firestitch/common';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
    selector: 'fs-format-functions',
    templateUrl: './format-functions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HighlightDirective],
})
export class FsFormatFunctionsComponent {

  public examples = [];

  constructor() {

    this.examples = [
      {
        name: 'Number',
        code: 'import { number } from \'@firestitch/common\';\nnumber(42397803.23987, 2)',
        result: number(42397803.23987, 2),
      },
    ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    });
  }

}
