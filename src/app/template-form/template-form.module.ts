import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {
  TemplateCustomValidationComponent
} from 'app/template-form/custom-validation/custom-validation.component';
import {NestedFormExample1Component} from 'app/template-form/nested-form-example1/nested-form-example1.component';
import {AddressComponent} from 'app/template-form/nested-form-example1/address/address.component';
import {PhoneComponent} from 'app/template-form/nested-form-example1/phone/phone.component';


@NgModule({
  declarations: [NestedFormExample1Component, AddressComponent, PhoneComponent, TemplateCustomValidationComponent],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class TemplateFormModule {

}
