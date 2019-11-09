import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nestable-form',
  template: `
    <div>
      <h1>Nestable form example using nestable Form Directive</h1>
      <app-root-form></app-root-form>
    </div>`,
  styleUrls: ['./nestable-form.component.css']
})
export class NestableFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
