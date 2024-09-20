import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[fsAutoSelect]',
})
export class FsAutoSelectDirective implements AfterViewInit {

  @Input() public fsAutoSelect = true;

  constructor(
    private _el: ElementRef,
  ) { }

  public ngAfterViewInit(): void {
    if ((this.fsAutoSelect ?? true) === true) {
      this.select();
    }
  }

  public select(): void {
    setTimeout(() => {
      if (this._el.nativeElement.focus) {
        this._el.nativeElement.select();
      }
    }, 50);
  }
}
