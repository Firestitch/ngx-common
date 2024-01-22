import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FsCommonModule } from '@firestitch/common';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';


// import * as hljs from 'highlight.js/lib/highlight';
// import * as hljsJson from 'highlight.js/lib/languages/json';
// import * as hljsTypescript from 'highlight.js/lib/languages/typescript';

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
} from './components';
import { AppMaterialModule } from './material.module';


// export function highlightJsFactory() {
//   hljs.registerLanguage('ts', hljsTypescript);
//   hljs.registerLanguage('json', hljsJson);
//   return hljs;
// }

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
    HighlightModule,
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
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
        themePath: 'path-to-theme.css', // Optional, and useful if you want to change the theme dynamically
      },
    },
  ],
})
export class PlaygroundModule {
}
