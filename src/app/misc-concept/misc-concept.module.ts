import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionTodoComponent } from 'app/misc-concept/change-detection/todo/change-detection-todo.component';
import {TodoItemComponent} from 'app/misc-concept/change-detection/todo/todo-item.component';
import {TodoListComponent} from 'app/misc-concept/change-detection/todo/todo-list.component';
import { NewsLetterHome1Component } from 'app/misc-concept/change-detection/news-letter/default-strategy/news-letter-home1.component';
import { NewsLetterHome2Component } from 'app/misc-concept/change-detection/news-letter/on-push2/news-letter-home2.component';
import { NewsLetterHome3Component } from 'app/misc-concept/change-detection/news-letter/on-push3/news-letter-home3.component';
import { NewsLetterHome4Component } from 'app/misc-concept/change-detection/news-letter/on-push4/news-letter-home4.component';
import { NewsLetterHome5Component } from 'app/misc-concept/change-detection/news-letter/on-push5/news-letter-home5.component';
import {Newsletter2Component} from 'app/misc-concept/change-detection/news-letter/on-push4/news-letter2.component';
import {FormsModule} from '@angular/forms';
import {Newsletter1Component} from 'app/misc-concept/change-detection/news-letter/news-letter1.component';
import {Newsletter3Component} from 'app/misc-concept/change-detection/news-letter/on-push5/news-letter3.component';
import {NewsLetter4Component} from 'app/misc-concept/change-detection/news-letter/on-push6/news-letter4.component';
import {NewsLetterHome6Component} from 'app/misc-concept/change-detection/news-letter/on-push6/news-letter-home6.component';




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
    NewsLetterHome6Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    ChangeDetectionTodoComponent,
    NewsLetterHome1Component,
    NewsLetterHome2Component,
    NewsLetterHome3Component,
    NewsLetterHome4Component,
    NewsLetterHome5Component,
    NewsLetterHome6Component]
})
export class MiscConceptModule { }
