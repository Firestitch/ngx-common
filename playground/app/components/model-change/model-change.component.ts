import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-model-change',
  templateUrl: './model-change.component.html',
  styleUrls: ['./model-change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelChangeComponent {

  public value = null;

  public change(e) {
    console.log('Change', e);
  }
}
