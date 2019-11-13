import {TimeComponent} from 'app/misc-concept/change-detection/time/time.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-time-child',
  template: `<span>I am a child component</span>`,
})
export class TimeChildComponent {
  constructor(private parentComponent: TimeComponent) {
    this.parentComponent.text = `${this.parentComponent.text} : updated by child`;
  }

  /*
//this expression has changed error
      ngAfterViewChecked() {
        this.parent.text = 'Updated text in parent component from ngAfterViewChecked';
    } */
}
