import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[highlight]',
    standalone: true,
})
export class HighlightDirective implements OnInit {

  @Input() public languages;
  @Input() public highlight;

  constructor(
    private _el: ElementRef,
  ) { }

  public ngOnInit() {
    this._el.nativeElement.innerHTML = this.highlight;
  }
}
