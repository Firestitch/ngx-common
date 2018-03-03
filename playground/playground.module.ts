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
import { FsFormatExampleComponent } from './app/components/fsformat-example/fsformat-example.component';
import { FsExampleModule } from '@firestitch/example';
import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import * as hljsJson from 'highlight.js/lib/languages/json';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

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
    FsUtilExampleComponent,
    FsFormatExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
