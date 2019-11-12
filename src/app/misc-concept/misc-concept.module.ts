import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionTodoComponent } from 'app/misc-concept/change-detection/todo/change-detection-todo.component';
import {TodoItemComponent} from 'app/misc-concept/change-detection/todo/todo-item.component';
import {TodoListComponent} from 'app/misc-concept/change-detection/todo/todo-list.component';



@NgModule({
  declarations: [ChangeDetectionTodoComponent , TodoItemComponent, TodoListComponent],
  imports: [
    CommonModule
  ],
  exports : [ChangeDetectionTodoComponent]
})
export class MiscConceptModule { }
