import { Component } from '@angular/core';

@Component({
  selector: 'fsformat-pipes',
  templateUrl: 'fsformat-pipes.component.html'
})
export class FsFormatPipesComponent {

  pipes: any = {};

  constructor() {
    this.pipes.number = '{{42397803.23987|fsFormatNumber:2}}';
    this.pipes.currency = {
      simple: `{{42397803.23987|fsFormatCurrency}}`,
      eur: `{{42397803.23987|fsFormatCurrency:0:'EUR'}}`,
      precision: `{{42397803.23987|fsFormatCurrency:2:'EUR'}}`,
    };
  }

}
