import './../tools/assets/playground.scss';
import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { ToastrModule } from 'ngx-toastr'
import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import * as hljsJson from 'highlight.js/lib/languages/json';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

import {
  FsUtilFunctionsComponent,
  FsUtilPipesComponent,
  FsUtilQueueComponent,
  FsUtilQueueSaveComponent,
  FsFormatFunctionsComponent,
  FsFormatPipesComponent,
  FsFormatAcronymComponent,
} from './app/components';

import { FsCommonModule } from '../src';
import { FsArrayExampleComponent } from './app/components/fsarray-example/fsarray-example.component';

export function highlightJsFactory() {
  hljs.registerLanguage('ts', hljsTypescript);
  hljs.registerLanguage('json', hljsJson);
  return hljs;
}
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsCommonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    FsMessageModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],
  entryComponents: [
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
    FsFormatAcronymComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
