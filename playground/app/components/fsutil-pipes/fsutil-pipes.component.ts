import {Component} from '@angular/core';

@Component({
  selector: 'fsutil-pipes',
  templateUrl: 'fsutil-pipes.component.html'
})
export class FsUtilPipesComponent {

  pipes = [];
  constructor() {
    this.pipes['isEmpty'] = '<span *ngIf="{}|fsUtilIsEmpty">Is Empty</span>';
    this.pipes['isNotEmpty'] = '<span *ngIf="{ key: \'value\' }|fsUtilIsNotEmpty">Is Not Empty</span>';
  }
}
