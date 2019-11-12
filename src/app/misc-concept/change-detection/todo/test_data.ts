import {Todo} from 'app/misc-concept/change-detection/todo/todo';
import {Owner} from 'app/misc-concept/change-detection/todo/owner';

const testData = [
  new Todo(1, 'TODO 1', false, new Owner('Ruby', 'Jha')),
  new Todo(1, 'TODO 2', false, new Owner('Ruby', 'Jha')),
  new Todo(1, 'TODO 3', false, new Owner('Ruby', 'Jha')),
];

export const initialData = testData;
