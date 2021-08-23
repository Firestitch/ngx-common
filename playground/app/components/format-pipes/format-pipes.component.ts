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
    this.pipes.bytes = [
      '{{423978|fsFormatBytes}}',
      '{{67654543|fsFormatBytes}}',
      '{{8934734764|fsFormatBytes}}',
      '{{(400 * 1024 * 1024)|fsFormatBytes}}',
    ];
    this.pipes.currency = {
      simple: `{{42397803.23987|fsFormatCurrency}}`,
      decimals: `{{42397803.23987|fsFormatCurrency:2}}`,
      decimals4: `{{42397803.23987|fsFormatCurrency:[2,4]}}`,
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
