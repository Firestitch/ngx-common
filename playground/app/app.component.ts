import { ChangeDetectionStrategy, Component } from '@angular/core';

import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { FsArrayExampleComponent } from './components/array-example/array-example.component';
import { FsUtilFunctionsComponent } from './components/util-functions/util-functions.component';
import { FsUtilPipesComponent } from './components/util-pipes/util-pipes.component';
import { FsUtilQueueComponent } from './components/util-queue/util-queue.component';
import { FsUtilQueueSaveComponent } from './components/util-queue-save/util-queue-save.component';
import { FsFormatFunctionsComponent } from './components/format-functions/format-functions.component';
import { FsFormatPipesComponent } from './components/format-pipes/format-pipes.component';
import { FsFormatAcronymComponent } from './components/format-acronym/format-acronym.component';
import { AutofocusComponent } from './components/autofocus/autofocus.component';
import { ModelChangeComponent } from './components/model-change/model-change.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsExampleModule,
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
})
export class AppComponent {
  public config = environment;
}
