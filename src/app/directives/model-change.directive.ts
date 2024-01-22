import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';


@Directive({
  selector: '[fsModelChange]',
})
export class FsModelChangeDirective implements OnInit, OnDestroy {

  @Input() public fsModelChangeOptions: { debounce?: number };

  @Output() public fsModelChange = new EventEmitter();

  private _destroy$ = new Subject();

  constructor(
    private _ngModel: NgModel,
  ) { }

  public ngOnInit(): void {
    this._ngModel.update
      .pipe(
        debounceTime(this.fsModelChangeOptions.debounce),
        takeUntil(this._destroy$),
      )
      .subscribe((value) => {
        this.fsModelChange.emit(value);
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
