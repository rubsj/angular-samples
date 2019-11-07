import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[rjAgeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true}]
})
export class AgeValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return ageValidator(control);
  }

}

export function ageValidator(control: AbstractControl): ValidationErrors | null  {
    if (control.value > -1 && control.value < 130) {
      return null;
    } else {
      return {rjAgeValidator: true};
  }
}

export function numberOnly(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const numOnlyRegex = new RegExp('^[0-9]*$');
    const testResult = numOnlyRegex.test(control.value);
    if (testResult) {
      return null;
    } else {
      return {onlyNumberAllowed: true};
    }
  };
}
