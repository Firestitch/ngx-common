import { FsUtil } from './fs-util.service';
import { FormsModule } from '@angular/forms';
import { FsUtilStringifyPipe, FsUtilGuidPipe } from './fs-util.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
      FsUtilStringifyPipe,
      FsUtilGuidPipe
    ],
    providers: [
      FsUtil
    ],
    exports: [
      FsUtilStringifyPipe,
      FsUtilGuidPipe
    ]
})
export class FsUtilModule {

}
