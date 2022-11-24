import { AfterViewInit, Directive, ElementRef, Host, Input, Optional } from '@angular/core';

import { MatInput } from '@angular/material/input';


@Directive({
  selector: '[fsAutofocus],[autofocus]',
})
export class FsAutofocusDirective implements AfterViewInit {

  @Input() public fsAutofocus = true;

  constructor(
    @Optional() @Host() private _matInput: MatInput,
    private _el: ElementRef,
  ) { }

  public ngAfterViewInit(): void {
    if (this.fsAutofocus !== false) {
      setTimeout(() => {
        this.focus();
      }, 100);
    }
  }

  public focus(): void {
    if(this._matInput) {
      this._matInput.focus();
    } else if(this._el.nativeElement.focus) {
      this._el.nativeElement.focus();
    }
  }
}
