import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[fsStopPropagation]',
    standalone: true,
})
export class FsStopPropagationDirective {
  @HostListener('click', ['$event'])
  public preventClick(event) {
    event.stopPropagation();
  }
}
