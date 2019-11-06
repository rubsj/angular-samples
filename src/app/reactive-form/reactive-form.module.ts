import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveCustomValidationComponent} from 'app/reactive-form/custom-validation/custom-validation.component';
import {CommonModule} from '@angular/common';




@NgModule({
  declarations: [ReactiveCustomValidationComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    CommonModule

  ]
})
export class ReactiveFormModule { }
