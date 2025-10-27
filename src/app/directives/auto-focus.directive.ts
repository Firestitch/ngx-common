import { AfterViewInit, Directive, ElementRef, Host, Input, Optional } from '@angular/core';

import { MatInput } from '@angular/material/input';


@Directive({
    selector: '[fsAutofocus],[fsAutoFocus],[autofocus]',
    standalone: true,
})
export class FsAutoFocusDirective implements AfterViewInit {

  @Input() public fsAutofocus = true;
  @Input() public fsAutoFocus = true;
  @Input() public autofocus = true;

  constructor(
    @Optional() @Host() private _matInput: MatInput,
    private _el: ElementRef,
  ) { }

  public ngAfterViewInit(): void {
    if (
      (this.fsAutofocus ?? true) === true && 
      (this.fsAutofocus ?? true) === true && 
      (this.autofocus ?? true) === true
    ) {
      this.focus();
    }
  }

  public focus(): void {
    setTimeout(() => {
      const tmpEl = document.createElement('input');
      tmpEl.style.width = '0';
      tmpEl.style.height = '0';
      tmpEl.style.margin = '0';
      tmpEl.style.padding = '0';
      tmpEl.style.border = '0';
      tmpEl.style.opacity = '0';
      document.body.appendChild(tmpEl);
      tmpEl.focus();

      if (this._matInput) {
        this._matInput.focus();
      } else if (this._el.nativeElement.focus) {
        this._el.nativeElement.focus();
      }

      document.body.removeChild(tmpEl);
    }, 50);
  }
}
