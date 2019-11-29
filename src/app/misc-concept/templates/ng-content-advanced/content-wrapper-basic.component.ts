import {Component} from '@angular/core';

@Component({
  selector: 'app-wrapper-basic',
  template: `
   <div class="box">
     <ng-content></ng-content>
   </div>
  `,
  styles : [`
  .box {
    border: 2px solid blue;
    padding: 10px;
    margin-bottom: 10px;
  }
  `]

})
export class ContentWrapperBasicComponent {

}
