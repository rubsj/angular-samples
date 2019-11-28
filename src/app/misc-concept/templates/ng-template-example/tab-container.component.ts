import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tab-container',
  template: `
    <ng-template #defaultTabButtons>
      <div class="default-tab-buttons">
        <button class="tab-button">Default button</button>
      </div>
    </ng-template>
    <ng-container *ngTemplateOutlet="headerTemplate? headerTemplate :defaultTabButtons">

    </ng-container>
  `
})
export class TabContainerComponent {
  @Input() headerTemplate: TemplateRef<any>;
}
