import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { FsClearModule } from '@firestitch/clear';
import { FsMessage } from '@firestitch/message';

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
    FsClearModule,
  ],
})
export class ModelChangeComponent {

  public value = null;
  private _message = inject(FsMessage);

  public change() {
    this._message.info('Change');
  }
}
