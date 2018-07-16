import { Component } from '@angular/core';

@Component({
  selector: 'fsformat-pipes',
  templateUrl: 'fsformat-pipes.component.html'
})
export class FsFormatPipesComponent {

  pipes = [];

  constructor() {
    this.pipes['number'] = '{{42397803.23987|fsFormatNumber:2}}';
  }

}
