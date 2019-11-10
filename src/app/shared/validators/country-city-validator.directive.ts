import {Directive} from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors} from '@angular/forms';

@Directive({
  selector: '[appCountryCityValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CountryCityValidatorDirective, multi: true}]
})
export class CountryCityValidatorDirective {

  validate(form: FormGroup): ValidationErrors | null {
    const countryControl = form.get('location.country') || form.get('country');
    const cityControl = form.get('location.city') || form.get('city');
    let isValid = true;
    let message;
    if (countryControl != null && cityControl != null) {
      if ((countryControl.value === 'India') && (cityControl.value !== 'Delhi')) {
        message = {
          countryCity: {message: 'If the country is India, the city must be Delhi'}
        };
        isValid = false;
      }
    }
    return isValid ? null : message;
  }
}

export function countryCityValidator(form: FormGroup): ValidationErrors | null {
  const countryControl =  form.get('country');
  const cityControl = form.get('city');
  let isValid = true;
  let message;
  if (countryControl != null && cityControl != null) {
    if ((countryControl.value === 'India') && (cityControl.value !== 'Delhi')) {
      message = {
        countryCity: {message: 'If the country is India, the city must be Delhi'}
      };
      isValid = false;
    }
  }
  return isValid ? null : message;
}
