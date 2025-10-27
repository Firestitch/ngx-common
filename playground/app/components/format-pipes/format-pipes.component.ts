import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { FsFormatNumberPipe } from '../../../../src/app/pipes/number.pipe';
import { FsFormatCurrencyPipe } from '../../../../src/app/pipes/currency.pipe';
import { FsFormatTruncatePipe } from '../../../../src/app/pipes/truncate.pipe';
import { FsFormatBytesPipe } from '../../../../src/app/pipes/bytes.pipe';
import { FsFormatOrdinalNumberPipe } from '../../../../src/app/pipes/ordinal-number.pipe';

@Component({
    selector: 'fs-format-pipes',
    templateUrl: './format-pipes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        HighlightDirective,
        FsFormatNumberPipe,
        FsFormatCurrencyPipe,
        FsFormatTruncatePipe,
        FsFormatBytesPipe,
        FsFormatOrdinalNumberPipe,
    ],
})
export class FsFormatPipesComponent {

  public pipes: any = {};

  public text = 'Lorem ipsum lorem';

  constructor() {
    this.pipes.number = '{{42397803.23987|fsFormatNumber:2}}';
    this.pipes.ordinalNumber = [
      '{{1|fsFormatOrdinalNumber}}',
      '{{2|fsFormatOrdinalNumber}}',
      '{{3|fsFormatOrdinalNumber}}',
      '{{4|fsFormatOrdinalNumber}}',
      '{{11|fsFormatOrdinalNumber}}',
      '{{21|fsFormatOrdinalNumber}}',
    ];

    this.pipes.bytes = [
      '{{233|fsFormatBytes}}',
      '{{65.443 * 1024|fsFormatBytes}}',
      '{{85.23 * 1024 * 1024|fsFormatBytes:0}}',
      '{{402.54 * 1024 * 1024 * 1024|fsFormatBytes}}',
      '{{825.23 * 1024 * 1024|fsFormatBytes:0:\'MB\'}}',
      '{{3443 * 1024 * 1024|fsFormatBytes:null:\'GB\'}}',
    ];

    this.pipes.currency = {
      simple: '{{42397803.23987|fsFormatCurrency}}',
      decimals: '{{42397803.23987|fsFormatCurrency:0}}',
      decimals4: '{{42397803.23987|fsFormatCurrency:2:4}}',
      eur: '{{42397803.23987|fsFormatCurrency:2:\'EUR\'}}',
      precision: '{{42397803.23987|fsFormatCurrency:0:\'EUR\'}}',
      cad: '{{42397803.23987|fsFormatCurrency:0:\'CAD\'}}',
    };

    this.pipes.truncate = {
      simple: `{{ '${this.text}' | fsFormatTruncate }}`,
      limit: `{{ '${this.text}' | fsFormatTruncate: 15 }}`,
      completeWord: `{{ '${this.text}' | fsFormatTruncate: 15 : true }}`,
      elipsis: `{{ '${this.text}' | fsFormatTruncate: 15 : true : '***' }}`,
    };
  }

}
