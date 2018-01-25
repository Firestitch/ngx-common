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

    console.log('FsUtil.isEmpty(10)', FsUtil.isEmpty(10));
    console.log('FsUtil.isEmpty({ a: 1 })', FsUtil.isEmpty({ a: 1 }));
    console.log('FsUtil.isEmpty(true)', FsUtil.isEmpty(true));

    console.log('FsUtil.isEmpty(0)', FsUtil.isEmpty(0));
    console.log('FsUtil.isEmpty(false)', FsUtil.isEmpty(false));
    console.log('FsUtil.isEmpty(null)', FsUtil.isEmpty(null));
    console.log('FsUtil.isEmpty({})', FsUtil.isEmpty({}));
  }


}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FsCommonModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
