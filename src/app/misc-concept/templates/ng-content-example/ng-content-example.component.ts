import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  styles : [`
    div.divGroup {
      border: 1px solid blue;
      padding: 10px;
      margin: 10px;
    }
  `],
  template : `
  <div class="divGroup">NgContentExampleComponent works
    <app-project-content-example>
      <h2>Header for first ng-content</h2>
      <p>Data for div body ...</p>
      <span>this is custom footer ...</span>
    </app-project-content-example>
  </div>
  `,
})
export class NgContentExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
