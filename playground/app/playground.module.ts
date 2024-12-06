import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FsCommonModule } from '@firestitch/common';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  AutofocusComponent,
  FsArrayExampleComponent,
  FsFormatAcronymComponent,
  FsFormatFunctionsComponent,
  FsFormatPipesComponent,
  FsUtilFunctionsComponent,
  FsUtilPipesComponent,
  FsUtilQueueComponent,
  FsUtilQueueSaveComponent,
  ModelChangeComponent,
  ResourceLoaderComponent,
} from './components';
import { HighlightDirective } from './directives/highlight.directive';
import { AppMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsCommonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  declarations: [
    AppComponent,
    FsArrayExampleComponent,
    FsUtilFunctionsComponent,
    FsUtilPipesComponent,
    FsUtilQueueComponent,
    FsUtilQueueSaveComponent,
    FsFormatFunctionsComponent,
    FsFormatPipesComponent,
    FsFormatAcronymComponent,
    AutofocusComponent,
    ModelChangeComponent,
    ResourceLoaderComponent,
    HighlightDirective,
  ],
})
export class PlaygroundModule {
}
