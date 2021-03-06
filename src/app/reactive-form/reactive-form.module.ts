import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveCustomValidationComponent} from 'app/reactive-form/custom-validation/custom-validation.component';
import {CommonModule} from '@angular/common';
import {RxSimpleFormExample1Component} from 'app/reactive-form/simple-form-example1/rx-simple-form-example1.component';
import {CustomCommonModule} from 'app/shared/custom-common.module';
import { RxSimpleFormExample2Component } from './rx-simple-form-example2/rx-simple-form-example2.component';


@NgModule({
  declarations: [
    ReactiveCustomValidationComponent,
    RxSimpleFormExample1Component,
    RxSimpleFormExample2Component],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    CustomCommonModule

  ],

})
export class ReactiveFormModule {
}
