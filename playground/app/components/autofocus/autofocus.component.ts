import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsAutoFocusDirective } from '../../../../src/app/directives/auto-focus.directive';


@Component({
    selector: 'app-autofocus',
    templateUrl: './autofocus.component.html',
    styleUrls: ['./autofocus.component.scss'],
    standalone: true,
    imports: [MatFormField, MatLabel, MatInput, FsAutoFocusDirective]
})
export class AutofocusComponent {

}
