import {Component} from '@angular/core';

@Component({
  selector: 'fs-util-pipes',
  templateUrl: 'util-pipes.component.html'
})
export class FsUtilPipesComponent {

  public pipes: any = [];
  constructor() {
    this.pipes.isEmpty = '<span *ngIf="{}|fsUtilIsEmpty">Is Empty</span>';
    this.pipes.isNotEmpty = '<span *ngIf="{ key: \'value\' }|fsUtilIsNotEmpty">Is Not Empty</span>';
  }
}
