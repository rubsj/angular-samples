import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-status',
  templateUrl : './form-status.component.html',
  styleUrls : ['./form-status.component.css']

})
export class FormStatusComponent {
  @Input() private isFormValid: boolean;

  @Input() private formName: string;

}
