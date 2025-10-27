import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FsModelChangeDirective } from '../../../../src/app/directives/model-change.directive';


@Component({
    selector: 'app-model-change',
    templateUrl: './model-change.component.html',
    styleUrls: ['./model-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        FsModelChangeDirective,
    ],
})
export class ModelChangeComponent {

  public value = null;

  public change(e) {
    console.log('Change', e);
  }
}
