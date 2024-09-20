import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { FsAutoFocusDirective, FsAutoSelectDirective, FsModelChangeDirective } from './directives';
import { FsPreventDefaultDirective } from './directives/prevent-default.directive';
import { FsStopPropagationDirective } from './directives/stop-propagation.directive';
import { FsFormatBytesPipe } from './pipes';
import { FsFormatCurrencyPipe } from './pipes/currency.pipe';
import { FsFormatNumberPipe } from './pipes/number.pipe';
import { FsFormatOrdinalNumberPipe } from './pipes/ordinal-number.pipe';
import { FsFormatTruncatePipe } from './pipes/truncate.pipe';
import {
  FsUtilGuidPipe,
  FsUtilIsEmptyPipe,
  FsUtilIsNotEmptyPipe,
  FsUtilStringifyPipe,
} from './pipes/util.pipe';
import { FsArray } from './services/array.service';
import { FsMath } from './services/math.service';
import { FsUtil } from './services/util.service';
import { FsValidate } from './services/vaildate.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FsStopPropagationDirective,
    FsPreventDefaultDirective,
    FsAutoFocusDirective,
    FsAutoSelectDirective,
    FsUtilGuidPipe,
    FsUtilIsEmptyPipe,
    FsUtilIsNotEmptyPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe,
    FsFormatCurrencyPipe,
    FsFormatTruncatePipe,
    FsFormatBytesPipe,
    FsFormatOrdinalNumberPipe,
    FsModelChangeDirective,
  ],
  exports: [
    FsStopPropagationDirective,
    FsPreventDefaultDirective,
    FsAutoFocusDirective,
    FsAutoSelectDirective,
    FsUtilGuidPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe,
    FsFormatCurrencyPipe,
    FsFormatTruncatePipe,
    FsUtilIsEmptyPipe,
    FsUtilIsNotEmptyPipe,
    FsFormatBytesPipe,
    FsModelChangeDirective,
    FsFormatOrdinalNumberPipe,
  ],
})
export class FsCommonModule {
  public static forRoot(): ModuleWithProviders<FsCommonModule> {
    return {
      ngModule: FsCommonModule,
      providers: [
        FsArray,
        FsMath,
        FsUtil,
        FsValidate,
      ],
    };
  }
}
