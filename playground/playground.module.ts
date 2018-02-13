import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsCommonModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsArrayExampleComponent } from './app/components/fsarray-example/fsarray-example.component';
import { FsUtilExampleComponent } from './app/components/fsutil-example/fsutil-example.component';
import { FsMathExampleComponent } from './app/components/fsmath-example/fsmath-example.component';
import { FsExampleModule } from '@firestitch/example';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsCommonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FsArrayExampleComponent,
    FsUtilExampleComponent,
    FsMathExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
