import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HttpConceptsComponent} from 'app/http-concepts/http-concepts.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [HttpConceptsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,


  ]
})
export class HttpConceptsModule { }
