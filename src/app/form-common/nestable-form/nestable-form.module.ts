import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NestableFormDirective} from 'app/form-common/nestable-form/nestable-form.directive';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RootFormComponent} from 'app/form-common/nestable-form/root-form/root-form.component';
import {NestedFormComponent} from 'app/form-common/nestable-form/nested-form/nested-form.component';
import {ReactiveFormComponent} from 'app/form-common/nestable-form/reactive-form/reactive-form.component';
import {IsolatedFormComponent} from 'app/form-common/nestable-form/isolated-form/isolated-form.component';
import {FormStatusComponent} from 'app/form-common/nestable-form/form-status/form-status.component';
import {NestableFormComponent} from 'app/form-common/nestable-form/nestable-form.component';



@NgModule({
  declarations: [
    NestableFormDirective,
    RootFormComponent,
    NestedFormComponent,
    ReactiveFormComponent,
    IsolatedFormComponent,
    FormStatusComponent,
    NestableFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports : [NestableFormComponent]
})
export class NestableFormModule {
}
