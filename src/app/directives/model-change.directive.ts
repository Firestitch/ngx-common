import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';


@Directive({
    selector: '[fsModelChange]',
    standalone: true,
})
export class FsModelChangeDirective implements OnInit, OnDestroy {
  private _ngModel = inject(NgModel);


  @Input() public fsModelChangeOptions: { debounce?: number };

  @Output() public fsModelChange = new EventEmitter();

  private _destroy$ = new Subject();

  public ngOnInit(): void {
    this._ngModel.update
      .pipe(
        debounceTime(this.fsModelChangeOptions?.debounce || 500),
        takeUntil(this._destroy$),
      )
      .subscribe((value) => {
        this.fsModelChange.emit(value);
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
