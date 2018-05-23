import { Component } from '@angular/core';
import { number } from '../../../../src/format';
import { acronym } from '../../../../src/format/acronym/acronym';

@Component({
  selector: 'fsformat-example',
  templateUrl: 'fsformat-example.component.html'
})
export class FsFormatExampleComponent {

  examples = [];
  pipes = [];

  // Acronym
  public acronymOriginalString = {
    ex1: 'X',
    ex2: 'Denver',
    ex3: 'Sun Rays',
    ex4: 'World of Warcraft',
    ex5: 'Super cala fragilistic expialadocious'
  };
  public acronymExamples = [];

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

    this.pipes['number'] = '{{42397803.23987|fsFormatNumber:2}}';

    this.acronymExamples = [
      {
        acronymOriginalString: this.acronymOriginalString.ex1,
        code: `import { acronym } from '@firestitch/common/format';\nacronym('${this.acronymOriginalString.ex1}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex1, 1),
        result2: acronym(this.acronymOriginalString.ex1, 2),
        result3: acronym(this.acronymOriginalString.ex1, 3),
      },
      {
        acronymOriginalString: this.acronymOriginalString.ex2,
        code: `import { acronym } from '@firestitch/common/format';\nacronym('${this.acronymOriginalString.ex2}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex2, 1),
        result2: acronym(this.acronymOriginalString.ex2, 2),
        result3: acronym(this.acronymOriginalString.ex2, 3),
      },
      {
        acronymOriginalString: this.acronymOriginalString.ex3,
        code: `import { acronym } from '@firestitch/common/format';\nacronym('${this.acronymOriginalString.ex3}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex3, 1),
        result2: acronym(this.acronymOriginalString.ex3, 2),
        result3: acronym(this.acronymOriginalString.ex3, 3),
      },
      {
        acronymOriginalString: this.acronymOriginalString.ex4,
        code: `import { acronym } from '@firestitch/common/format';\nacronym('${this.acronymOriginalString.ex4}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex4, 1),
        result2: acronym(this.acronymOriginalString.ex4, 2),
        result3: acronym(this.acronymOriginalString.ex4, 3),
      },
      {
        acronymOriginalString: this.acronymOriginalString.ex5,
        code: `import { acronym } from '@firestitch/common/format';\nacronym('${this.acronymOriginalString.ex5}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex5, 1),
        result2: acronym(this.acronymOriginalString.ex5, 2),
        result3: acronym(this.acronymOriginalString.ex5, 3),
      }
    ]
  }

}
