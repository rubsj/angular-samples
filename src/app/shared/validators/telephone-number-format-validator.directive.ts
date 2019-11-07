import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appTelephoneFormatValidator]',
  providers : [{provide : NG_VALIDATORS , useExisting : TelephoneNumberFormatValidatorDirective , multi : true}]
})
export class TelephoneNumberFormatValidatorDirective implements Validator {

  validate(control: FormControl): ValidationErrors | null {
      const isValid = /^\d{3,3}-\d{3,3}-\d{3,3}$/.test(control.value);
      const message = {
        telephoneNumber: {
          message : 'The phone number must be valid (XXX-XXX-XXX, where X is a digit)'
        }
      };
      return isValid ? null : message;
  }

}
