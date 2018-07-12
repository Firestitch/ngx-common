import './../tools/assets/playground.scss';
import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsCommonModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsArrayExampleComponent } from './app/components/fsarray-example/fsarray-example.component';

import {  FsUtilFunctionsComponent,
          FsUtilPipesComponent,
          FsQueueProcessorComponent,
          FsFormatFunctionsComponent,
          FsFormatPipesComponent,
          FsFormatAcronymComponent,
        } from './app/components';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsFormModule } from '@firestitch/form';
import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import * as hljsJson from 'highlight.js/lib/languages/json';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import { ToastrModule } from 'ngx-toastr'

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
    FsFormModule,
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
    FsQueueProcessorComponent,
    FsFormatFunctionsComponent,
    FsFormatPipesComponent,
    FsFormatAcronymComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
