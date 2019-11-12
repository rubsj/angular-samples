import {Owner} from 'app/misc-concept/change-detection/todo/owner';

export class Todo {
  // tslint:disable-next-line:variable-name
  constructor(public id: number, public description: string, private _completed: boolean, public owner: Owner) {
  }

  get completed() {
    if (this.id === 1 && this._completed) {
      // uncomment to see the change detector on the dev tools
      // tslint:disable-next-line:no-debugger
      // debugger;
    }
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }
}
