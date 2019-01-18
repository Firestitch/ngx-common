import { Component } from '@angular/core';

@Component({
  selector: 'fs-format-pipes',
  templateUrl: 'format-pipes.component.html'
})
export class FsFormatPipesComponent {

  pipes: any = {};

  text = `Lorem ipsum lorem`;

  constructor() {
    this.pipes.number = '{{42397803.23987|fsFormatNumber:2}}';
    this.pipes.currency = {
      simple: `{{42397803.23987|fsFormatCurrency}}`,
      eur: `{{42397803.23987|fsFormatCurrency:2:'EUR'}}`,
      precision: `{{42397803.23987|fsFormatCurrency:0:'EUR'}}`,
    };
    this.pipes.truncate = {
      simple: `{{ '${this.text}' | fsFormatTruncate }}`,
      limit: `{{ '${this.text}' | fsFormatTruncate: 15 }}`,
      completeWord: `{{ '${this.text}' | fsFormatTruncate: 15 : true }}`,
      elipsis: `{{ '${this.text}' | fsFormatTruncate: 15 : true : '***' }}`,
    };
  }

}
