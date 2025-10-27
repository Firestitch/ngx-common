import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[fsPreventDefault]',
    standalone: true,
})
export class FsPreventDefaultDirective {
  @HostListener('click', ['$event'])
  public preventClick(event) {
    event.preventDefault();
  }
}
