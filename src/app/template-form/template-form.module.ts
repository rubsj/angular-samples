import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NestedFormExample1Component } from './nested-form-example1/nested-form-example1.component';
import { AddressComponent } from './nested-form-example1/address/address.component';
import { PhoneComponent } from './nested-form-example1/phone/phone.component';

@NgModule({
declarations : [NestedFormExample1Component, AddressComponent, PhoneComponent],
imports: [
  BrowserModule,
FormsModule,
  ],
})
export class TemplateFormModule {

}
