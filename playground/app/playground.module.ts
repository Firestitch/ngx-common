import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { ToastrModule } from 'ngx-toastr';

import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import * as hljsJson from 'highlight.js/lib/languages/json';
import { HIGHLIGHT_JS, HighlightJsModule } from 'angular-highlight-js';

import { AppMaterialModule } from './material.module';

import {
  FsArrayExampleComponent,
  FsFormatAcronymComponent,
  FsFormatFunctionsComponent,
  FsFormatPipesComponent,
  FsUtilFunctionsComponent,
  FsUtilPipesComponent,
  FsUtilQueueComponent,
  FsUtilQueueSaveComponent,
  AutofocusComponent,
} from './components';

import { FsCommonModule } from '@firestitch/common';

export function highlightJsFactory() {
  hljs.registerLanguage('ts', hljsTypescript);
  hljs.registerLanguage('json', hljsJson);
  return hljs;
}

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
    ToastrModule.forRoot({ preventDuplicates: true }),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
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
  ],
})
export class PlaygroundModule {
}
