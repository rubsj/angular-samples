import {Component, ContentChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-wrapper-template',
  template: `
    <button (click)="show=!show">{{show? 'Hide' : 'Show'}}</button>
    <div class="box" *ngIf="show">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
    </div>
  `,
  styles: [`
    .box {
      border: 2px solid blue;
      padding: 10px;
      margin-bottom: 10px;
    }
  `]

})
export class ContentWrapperTemplateComponent {
  show = true;
  @ContentChild(TemplateRef , {static : true}) template: TemplateRef<any>;
}
