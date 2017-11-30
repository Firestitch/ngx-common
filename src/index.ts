import { FsUtilGuidPipe, FsUtilStringifyPipe } from './fsutil.pipe';

import { HttpClientModule } from '@angular/common/http';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsArray } from 'fsarray.service';
import { FsMath } from 'fsmath.service';
import { FsUtil } from 'fsutil.service';

export * from './fsutil.service';
export * from './fsarray.service';
export * from './fsmath.service';
export * from './fsutil.pipe';
@NgModule({
  imports: [
    CommonModule
],
declarations: [
  FsUtilStringifyPipe,
  FsUtilGuidPipe    
],
providers: [
  FsArray,
  FsMath,
  FsUtil
],
exports: [
  FsUtilStringifyPipe,
  FsUtilGuidPipe
]
})
export class FsApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsApiModule,
      providers: [
        FsArray,
        FsMath,
        FsUtil
      ]
    };
  }
}
