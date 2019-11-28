import {Component} from '@angular/core';

@Component({
  selector: 'app-project-content-example',
  styles: [`
    .heading {
      color: #007dc1;
    }

    .body {
      color: blueviolet;
    }

    .footer {
      color: aquamarine;
    }

  `],
  template: `
    <div class="heading">
      <h1>Welcome to Content Projection</h1>
      <ng-content select="h2"></ng-content>
    </div>
    <div class="body">
      <div>Content of the body ....
        <ng-content select="p"></ng-content>
      </div>
    </div>
    <div class="footer">
      <ng-content></ng-content>
    </div>
  `,
})
export class ProjectContentExampleComponent {
}
