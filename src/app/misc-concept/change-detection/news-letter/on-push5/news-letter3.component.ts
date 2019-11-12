import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from 'app/misc-concept/change-detection/news-letter/model';
import {Observable} from 'rxjs';
import {UserService} from 'app/misc-concept/change-detection/news-letter/user-service';

@Component({
  selector: 'app-news-letter3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset>

      <legend>Newsletter</legend>
      <h3>Hello {{firstName}} , enter your email to subscribe</h3>
      <form>
        <input type="email" name="email" #email="ngModel" ngModel>
        <input type="button" value="subscribe" (click)="subscribeToNewsletter(email.value)">
      </form>
    </fieldset>`
})
export class Newsletter3Component implements OnInit {

  firstName: string;
  @Output() subscribe = new EventEmitter<string>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.user$.subscribe(user => this.firstName = user.firstName);
  }

  subscribeToNewsletter(email: string) {
    console.log('email value inside newsletter component ', email);
    this.subscribe.emit(email);
  }
}
