import {NgModule} from '@angular/core';
import {AgeValidatorDirectiveDirective} from 'app/shared/age-validator-directive.directive';

@NgModule({
  declarations: [
    AgeValidatorDirectiveDirective
  ],
  exports : [
    AgeValidatorDirectiveDirective
  ]
})
export class CustomCommonModule { }
