import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autofocus]',
})
export class FsAutofocusDirective implements AfterViewInit {

  constructor(
    private _el: ElementRef,
  ) {}

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this._el.nativeElement.focus();
    })
  }
}
