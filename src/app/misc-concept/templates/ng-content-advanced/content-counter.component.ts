import {Component, OnDestroy} from '@angular/core';

let instances = 0;

@Component({
  selector: 'app-counter',
  template: `<h1>{{id}}</h1>`
})
export class ContentCounterComponent implements OnDestroy{
  id: number;

  constructor() {
    this.id = ++instances;
  }

  ngOnDestroy() {
     instances = 0;
  }
}
