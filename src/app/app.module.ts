import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from 'app/menu/menu.component';
import {TemplateFormModule} from 'app/template-form/template-form.module';
import {ReactiveFormModule} from 'app/reactive-form/reactive-form.module';
import {CustomCommonModule} from 'app/shared/custom-common.module';
import {HttpConceptsModule} from 'app/http-concepts/http-concepts.module';
import {CommonModule} from '@angular/common';
import {NestableFormModule} from 'app/form-common/nestable-form/nestable-form.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TemplateFormModule,
    ReactiveFormModule,
    CustomCommonModule,
    HttpConceptsModule,
    CommonModule,
    NestableFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
