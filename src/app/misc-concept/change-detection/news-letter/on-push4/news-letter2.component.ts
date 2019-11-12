import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from 'app/misc-concept/change-detection/news-letter/model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-news-letter2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset>

      <legend>Newsletter</legend>
      <h3>Hello {{(user$ | async).firstName}} , enter your email to subscribe</h3>
      <form>
        <input type="email" name="email" #email="ngModel" ngModel>
        <input type="button" value="subscribe" (click)="subscribeToNewsletter(email.value)">
      </form>
    </fieldset>`
})
export class Newsletter2Component {
  @Input() user$: Observable<User>;
  @Output() subscribe = new EventEmitter<string>();

  subscribeToNewsletter(email: string) {
    console.log('email value inside newsletter component ', email);
    this.subscribe.emit(email);
  }
}
