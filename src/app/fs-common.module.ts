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
import { FsFormatBytesPipe } from './pipes/bytes.pipe';
import { FsStopPropagationDirective } from './directives/stop-propagation.directive';
import { FsPreventDefaultDirective } from './directives/prevent-default.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsStopPropagationDirective,
    FsPreventDefaultDirective,
    FsUtilGuidPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe,
    FsFormatCurrencyPipe,
    FsFormatTruncatePipe,
    FsUtilIsEmptyPipe,
    FsUtilIsNotEmptyPipe,
    FsFormatBytesPipe,
  ],
  declarations: [
    FsStopPropagationDirective,
    FsPreventDefaultDirective,
    FsUtilGuidPipe,
    FsUtilIsEmptyPipe,
    FsUtilIsNotEmptyPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe,
    FsFormatCurrencyPipe,
    FsFormatTruncatePipe,
    FsFormatBytesPipe,
  ],
  providers: [
    FsArray,
    FsMath,
    FsUtil,
    FsValidate,
  ],
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
