import { HttpClientModule } from '@angular/common/http';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsArrayModule } from 'fs-array.module';
import { FsMathModule } from 'fs-math.module';
import { FsUtilModule } from 'fs-util.module';

export * from './fs-util.module';
export * from './fs-util.pipe';
export * from './fs-util.service';
export * from './fs-array.module';
export * from './fs-array.service';
export * from './fs-math.module';
export * from './fs-math.service';

@NgModule({
  imports: [
    CommonModule,
    FsUtilModule,
    FsArrayModule,
    FsMathModule
],
declarations: [
  // FsUtilStringifyPipe,
  // FsUtilGuidPipe    
],
providers: [
],
exports: [
  CommonModule,
  FsUtilModule,
  FsArrayModule,
  FsMathModule
]
})
export class FsCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsCommonModule,
      providers: [
      ]
    };
  }
}
