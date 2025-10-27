import { AfterViewInit, Directive, ElementRef, Input, inject } from '@angular/core';


@Directive({
    selector: '[fsAutoSelect]',
    standalone: true,
})
export class FsAutoSelectDirective implements AfterViewInit {
  private _el = inject(ElementRef);


  @Input() public fsAutoSelect = true;

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
