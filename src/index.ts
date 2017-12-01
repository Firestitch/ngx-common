import { HttpClientModule } from '@angular/common/http';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsArray } from './fs-array.service';
import { FsMath } from './fs-math.service';
import { FsUtil } from './fs-util.service';
import { FsUtilGuidPipe, FsUtilStringifyPipe } from './fs-util.pipe';


export * from './fs-util.pipe';
export * from './fs-util.service';
export * from './fs-array.service';
export * from './fs-math.service';

@NgModule({
  imports: [
    CommonModule
],
declarations: [
  FsUtilStringifyPipe,
  FsUtilGuidPipe
],
providers: [
],
exports: [
  FsUtilStringifyPipe,
  FsUtilGuidPipe
]
})
export class FsCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsCommonModule,
      providers: [
        FsArray,
        FsUtil,
        FsMath
      ]
    };
  }
}
