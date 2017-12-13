/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FsCommonModule, FsUtil }  from '@firestitch/common';

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: [
    'styles.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
class AppComponent {

  object = { somevalue: 92394872394 };
  constructor(private FsUtil: FsUtil) {
  }

}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FsCommonModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
