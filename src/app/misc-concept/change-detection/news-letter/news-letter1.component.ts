import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from 'app/misc-concept/change-detection/news-letter/model';

@Component({
  selector: 'app-news-letter1',
  template: `
    <fieldset>
      <h3>Hello {{user?.firstName}} , enter your email to subscribe</h3>
      <form>
        <input type="email" name="email" #email="ngModel" ngModel>
        <input type="button" value="subscribe" (click)="subscribeToNewsletter(email.value)">
      </form>
    </fieldset>
  `
})
export class Newsletter1Component {
  @Input() user: User;
  @Output() subscribe = new EventEmitter<string>();

  subscribeToNewsletter(email: string) {
    console.log('email value inside newsletter component ', email);
    this.subscribe.emit(email);
  }
}
