import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsArray } from './services/array.service';
import { FsMath } from './services/math.service';
import { FsUtil } from './services/util.service';
import { FsValidate } from './services/vaildate.service';
import {
  FsUtilGuidPipe,
  FsUtilStringifyPipe,
  FsUtilIsEmptyPipe,
  FsUtilIsNotEmptyPipe,
} from './pipes/util.pipe';
import { FsFormatNumberPipe } from './pipes/number.pipe';
import { FsFormatCurrencyPipe } from './pipes/currency.pipe';
import { FsFormatTruncatePipe} from './pipes/truncate.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsUtilGuidPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe,
    FsFormatCurrencyPipe,
    FsFormatTruncatePipe,
    FsUtilIsEmptyPipe,
    FsUtilIsNotEmptyPipe
  ],
  entryComponents: [
  ],
  declarations: [
    FsUtilGuidPipe,
    FsUtilIsEmptyPipe,
    FsUtilIsNotEmptyPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe,
    FsFormatCurrencyPipe,
    FsFormatTruncatePipe
  ],
  providers: [
    FsArray,
    FsMath,
    FsUtil,
    FsValidate
  ]
})
export class FsCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsCommonModule,
      providers: [
        FsArray,
        FsMath,
        FsUtil,
        FsValidate
      ]
    };
  }
}
