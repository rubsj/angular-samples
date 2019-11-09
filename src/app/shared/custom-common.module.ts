import {NgModule} from '@angular/core';
import {AgeValidatorDirective} from 'app/shared/validators/age-validator.directive';
import { ShowErrorsComponent } from 'app/shared/show-errors/show-errors.component';
import {CommonModule} from '@angular/common';
import { BirthYearValidatorDirective } from 'app/shared/validators/birth-year-validator.directive';
import { TelephoneNumberFormatValidatorDirective } from 'app/shared/validators/telephone-number-format-validator.directive';
import { CountryCityValidatorDirective } from 'app/shared/validators/country-city-validator.directive';
import { TelephoneNumbersValidatorDirective } from 'app/shared/validators/telephone-numbers-validator.directive';

@NgModule({
  declarations: [
    AgeValidatorDirective,
    ShowErrorsComponent,
    BirthYearValidatorDirective,
    TelephoneNumberFormatValidatorDirective,
    CountryCityValidatorDirective,
    TelephoneNumbersValidatorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgeValidatorDirective,
    BirthYearValidatorDirective,
    TelephoneNumberFormatValidatorDirective,
    ShowErrorsComponent,
    CountryCityValidatorDirective,
    TelephoneNumbersValidatorDirective
  ]
})
export class CustomCommonModule { }
