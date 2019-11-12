import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from 'app/misc-concept/change-detection/todo/todo';

@Component({
  selector: 'app-todo-item',
  template: `
    <span class="todo noselect" [ngClass]="{completed: todo.completed}" (click)="onToggle()">
      {{todo.owner.firstName}} - {{todo.description}}  - completed : {{todo.completed}}
    </span>`,
})
export class TodoItemComponent {
  @Input() todo: Todo;

  @Output() toggle = new EventEmitter<Todo>();

  onToggle() {
    this.toggle.emit(this.todo);
  }
}
