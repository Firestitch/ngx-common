import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
    selector: '[highlight]',
    standalone: true,
})
export class HighlightDirective implements OnInit {
  private _el = inject(ElementRef);


  @Input() public languages;
  @Input() public highlight;

  public ngOnInit() {
    this._el.nativeElement.innerHTML = this.highlight;
  }
}
