import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from 'app/menu/menu.component';
import {TemplateFormModule} from 'app/template-form/template-form.module';
import {ReactiveFormModule} from 'app/reactive-form/reactive-form.module';
import {CustomCommonModule} from 'app/custom-common.module';


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
    CustomCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
