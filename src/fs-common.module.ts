import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsArray } from './services/fsarray.service';
import { FsMath } from './services/fsmath.service';
import { FsUtil } from './services/fsutil.service';
import { FsValidate } from './services/fsvaildate.service';
import {  FsUtilGuidPipe, FsUtilStringifyPipe,
          FsUtilIsEmptyPipe, FsUtilIsNotEmptyPipe } from './pipes/fsutil.pipe';
import { FsFormatNumberPipe, FsFormatCurrencyPipe } from './format';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsUtilGuidPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe,
    FsFormatCurrencyPipe,
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
    FsFormatCurrencyPipe
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
