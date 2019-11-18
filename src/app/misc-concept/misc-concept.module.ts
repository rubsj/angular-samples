import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { ChangeDetectionTodoComponent } from 'app/misc-concept/change-detection/todo/change-detection-todo.component';
import {TodoItemComponent} from 'app/misc-concept/change-detection/todo/todo-item.component';
import {TodoListComponent} from 'app/misc-concept/change-detection/todo/todo-list.component';
import { NewsLetterHome1Component } from 'app/misc-concept/change-detection/news-letter/default-strategy/news-letter-home1.component';
import { NewsLetterHome2Component } from 'app/misc-concept/change-detection/news-letter/on-push2/news-letter-home2.component';
import { NewsLetterHome3Component } from 'app/misc-concept/change-detection/news-letter/on-push3/news-letter-home3.component';
import { NewsLetterHome4Component } from 'app/misc-concept/change-detection/news-letter/on-push4/news-letter-home4.component';
import { NewsLetterHome5Component } from 'app/misc-concept/change-detection/news-letter/on-push5/news-letter-home5.component';
import {Newsletter2Component} from 'app/misc-concept/change-detection/news-letter/on-push4/news-letter2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Newsletter1Component} from 'app/misc-concept/change-detection/news-letter/news-letter1.component';
import {Newsletter3Component} from 'app/misc-concept/change-detection/news-letter/on-push5/news-letter3.component';
import {NewsLetter4Component} from 'app/misc-concept/change-detection/news-letter/on-push6/news-letter4.component';
import {NewsLetterHome6Component} from 'app/misc-concept/change-detection/news-letter/on-push6/news-letter-home6.component';
import {TimeChildComponent} from 'app/misc-concept/change-detection/time/child.component';
import {TimeComponent} from 'app/misc-concept/change-detection/time/time.component';
import { ChildRootParentComponent } from 'app/misc-concept/change-detection/child-hierarchy/child-root-parent.component';
import {Child1Component} from 'app/misc-concept/change-detection/child-hierarchy/child1.component';
import {ChildOfChild1Component} from 'app/misc-concept/change-detection/child-hierarchy/child-of-child1.component';
import { NgxJquerySliderApproach1Component } from 'app/misc-concept/cva/ngx-jquery-slider/ngx-jquery-slider-approach1.component';
import {JquerySliderUsageComponent} from 'app/misc-concept/cva/ngx-jquery-slider/jquery-slider-usage.component';
import {NgxJquerySliderApproach2Component} from 'app/misc-concept/cva/ngx-jquery-slider/ngx-jquery-slider-approach2.component';
import { PersonComponent } from './cva/person/person.component';
import {PersonCvaComponent} from 'app/misc-concept/cva/person/person-cva.component';




@NgModule({
  declarations: [
    ChangeDetectionTodoComponent,
    TodoItemComponent,
    TodoListComponent,
    NewsLetterHome1Component,
    NewsLetterHome2Component,
    NewsLetterHome3Component,
    NewsLetterHome4Component,
    NewsLetterHome5Component,
    Newsletter1Component,
    Newsletter2Component,
    Newsletter3Component,
    NewsLetter4Component,
    NewsLetterHome6Component,
    TimeComponent,
    TimeChildComponent,
    ChildRootParentComponent,
    Child1Component,
    ChildOfChild1Component,
    NgxJquerySliderApproach1Component,
    NgxJquerySliderApproach2Component,
    JquerySliderUsageComponent,
    PersonComponent,
    PersonCvaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ChangeDetectionTodoComponent,
    NewsLetterHome1Component,
    NewsLetterHome2Component,
    NewsLetterHome3Component,
    NewsLetterHome4Component,
    NewsLetterHome5Component,
    NewsLetterHome6Component,
    TimeComponent,
  ],
    providers : [DatePipe],
})
export class MiscConceptModule { }
