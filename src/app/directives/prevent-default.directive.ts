import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[fsPreventDefault]',
})
export class FsPreventDefaultDirective {
  @HostListener('click', ['$event'])
  public preventClick(event) {
    event.preventDefault();
  }
}
