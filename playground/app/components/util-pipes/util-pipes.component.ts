import {Component} from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { FsUtilIsEmptyPipe, FsUtilIsNotEmptyPipe } from '../../../../src/app/pipes/util.pipe';

@Component({
    selector: 'fs-util-pipes',
    templateUrl: 'util-pipes.component.html',
    standalone: true,
    imports: [HighlightDirective, FsUtilIsEmptyPipe, FsUtilIsNotEmptyPipe]
})
export class FsUtilPipesComponent {

  public pipes: any = [];
  constructor() {
    this.pipes.isEmpty = '<span *ngIf="{}|fsUtilIsEmpty">Is Empty</span>';
    this.pipes.isNotEmpty = '<span *ngIf="{ key: \'value\' }|fsUtilIsNotEmpty">Is Not Empty</span>';
  }
}
