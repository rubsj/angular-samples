import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-status',
  templateUrl : './form-status.component.html',
  styleUrls : ['./form-status.component.css']

})
export class FormStatusComponent {
  @Input() isFormValid: boolean;

  @Input() formName: string;

}
