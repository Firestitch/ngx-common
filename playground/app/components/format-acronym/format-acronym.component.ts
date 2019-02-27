import { Component } from '@angular/core';
import { acronym } from '@firestitch/common';

@Component({
  selector: 'fs-format-acronym',
  templateUrl: 'format-acronym.component.html'
})
export class FsFormatAcronymComponent {

  public acronymOriginalString = {
    ex1: 'X',
    ex2: 'Denver',
    ex3: 'Sun Rays',
    ex4: 'World of Warcraft',
    ex5: 'Super cala fragilistic expialadocious'
  };
  public acronymExamples = [];

  constructor() {
    this.acronymExamples = [
      {
        acronymOriginalString: this.acronymOriginalString.ex1,
        code: `import { acronym } from '@firestitch/common';\nacronym('${this.acronymOriginalString.ex1}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex1, 1),
        result2: acronym(this.acronymOriginalString.ex1, 2),
        result3: acronym(this.acronymOriginalString.ex1, 3),
      },
      {
        acronymOriginalString: this.acronymOriginalString.ex2,
        code: `import { acronym } from '@firestitch/common';\nacronym('${this.acronymOriginalString.ex2}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex2, 1),
        result2: acronym(this.acronymOriginalString.ex2, 2),
        result3: acronym(this.acronymOriginalString.ex2, 3),
      },
      {
        acronymOriginalString: this.acronymOriginalString.ex3,
        code: `import { acronym } from '@firestitch/common';\nacronym('${this.acronymOriginalString.ex3}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex3, 1),
        result2: acronym(this.acronymOriginalString.ex3, 2),
        result3: acronym(this.acronymOriginalString.ex3, 3),
      },
      {
        acronymOriginalString: this.acronymOriginalString.ex4,
        code: `import { acronym } from '@firestitch/common';\nacronym('${this.acronymOriginalString.ex4}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex4, 1),
        result2: acronym(this.acronymOriginalString.ex4, 2),
        result3: acronym(this.acronymOriginalString.ex4, 3),
      },
      {
        acronymOriginalString: this.acronymOriginalString.ex5,
        code: `import { acronym } from '@firestitch/common';\nacronym('${this.acronymOriginalString.ex5}', 1 | 2 | 3)`,
        result1: acronym(this.acronymOriginalString.ex5, 1),
        result2: acronym(this.acronymOriginalString.ex5, 2),
        result3: acronym(this.acronymOriginalString.ex5, 3),
      }
    ]
  }

}
