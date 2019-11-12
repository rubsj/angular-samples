import {Component, OnInit} from '@angular/core';
import {Todo} from 'app/misc-concept/change-detection/todo/todo';
import {initialData} from 'app/misc-concept/change-detection/todo/test_data';
import {Owner} from 'app/misc-concept/change-detection/todo/owner';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection-todo.component.html',
  styleUrls: ['./change-detection-todo.component.css']
})
export class ChangeDetectionTodoComponent {

  todos: Todo[] = initialData;
  message: string;
  callback = (message) => {
    console.log('setting message...');
    this.message = message;
  }

  constructor() {
  }

  toggleFirst() {
    this.todos[0].completed = !this.todos[0].completed;
  }

  addTodo() {
    const newTodos = this.todos.slice(0);
    newTodos.push(new Todo(1, 'TODO 4', false, new Owner('Ruby', 'Jha')));
    this.todos = newTodos;
  }

  onAdd() {
    this.message = 'Adding TODO ...';
    this.addTodo();
  }
}
