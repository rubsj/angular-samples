import {Component} from '@angular/core';

@Component({
  selector: 'app-wrapper-targeted-projection',
  template: `
   <div class="box red">
     <ng-content></ng-content>
   </div>
   <div class="box">
     <ng-content select="app-counter"></ng-content>
   </div>
  `,
  styles: [`
    .box {
      border: 2px solid blue;
      padding: 10px;
      margin-bottom: 10px;
    }

    .box.red {
      border-color: red;
    }
  `]

})
export class ContentWrapperTargetedProjectionComponent {

}
