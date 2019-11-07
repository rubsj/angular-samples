import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validators} from '@angular/forms';

@Directive({
  selector: '[rjBirthYear]',
  providers: [{provide: NG_VALIDATORS, useExisting: BirthYearValidatorDirective, multi: true}]
})
export class BirthYearValidatorDirective implements Validators {

  validate(control: FormControl): ValidationErrors | null {
    console.log('birth validator called with ' , control.value);
    const numVal = Number(control.value);
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 100;
    const maxYear = currentYear - 18;
    const isValid = !isNaN(numVal) && numVal >= minYear && numVal <= maxYear;
    const message = {
      years: {message: `The year must be a valid number between ${minYear} and  ${maxYear}`}
    };

    return isValid ? null : message;
  }

}
