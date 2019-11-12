import {AfterViewChecked, Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from 'app/misc-concept/change-detection/todo/todo';


@Component({
  selector: 'app-todo-list',
  // uncomment to switch to on-push mode
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <app-todo-item [todo]="todo" (toggle)="onToggle($event)"></app-todo-item>
      </li>
    </ul>
    <button type="button" (click)="blowup()">Trigger Change Detection Loop</button>
  `,
})
export class TodoListComponent implements AfterViewChecked {
  @Input() todos: Todo[];
  // tslint:disable-next-line:ban-types
  @Input() callback: Function;
  @Output() addTodo = new EventEmitter<Todo>();

  clicked = false;

  onToggle(todo: Todo) {
    console.log('toggling todo');
    todo.completed = !todo.completed;
  }

  blowup() {
    console.log('Trying to blow up change detection...');
    this.clicked = true;
    this.addTodo.emit(null);
  }

  ngAfterViewChecked(): void {
    if (this.callback && this.clicked) {
      console.log('changing status ...');
      this.callback(Math.random());
    }
  }
}
