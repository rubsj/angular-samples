import {Directive} from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appTelephoneNumbersValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: TelephoneNumbersValidatorDirective, multi: true}]
})
export class TelephoneNumbersValidatorDirective implements Validator {

  validate(formGroup: FormGroup): ValidationErrors | null {
    const message = {
      telephoneNumbers: {
        message: 'At least one telephone number must be entered'
      }
    };
    const phoneNumbers = formGroup.get('phoneNumbers') as FormGroup;
    const hasPhoneNumber = phoneNumbers && Object.keys(phoneNumbers.controls).length > 0;
    return hasPhoneNumber ? null : message;

  }

}
