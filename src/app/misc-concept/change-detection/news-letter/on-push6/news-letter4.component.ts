import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from 'app/misc-concept/change-detection/news-letter/model';
import {Observable} from 'rxjs';
import {UserService} from 'app/misc-concept/change-detection/news-letter/user-service';

@Component({
  selector: 'app-news-letter4',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset *ngIf="user$ | async as user else loading">

      <legend>Newsletter</legend>

      <h3>Hello {{user.firstName}} , enter your email to subscribe</h3>
      <form>
        <input type="email" name="email" #email="ngModel" ngModel>
        <input type="button" value="subscribe" (click)="subscribeToNewsletter(email.value)">
      </form>
    </fieldset>
    <ng-template #loading>
      <div>Loading...</div>
    </ng-template>
  `
})
export class NewsLetter4Component {

  user$: Observable<any>;
  @Output() subscribe = new EventEmitter<string>();

  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
  }

  subscribeToNewsletter(email: string) {
    console.log('email value inside newsletter component ', email);
    this.subscribe.emit(email);
  }
}
