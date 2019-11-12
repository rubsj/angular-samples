import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from 'app/misc-concept/change-detection/news-letter/user-service';

@Component({
  selector: 'app-news-letter-home4',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>But now we would like to change a bit the design of our application. Let's say that instead of subscribing to the user$ observable directly at the level of the home component, we would like to pass this observable to the component tree</p>
    <p>This reference will always be the same as we emit new values of this observable.</p>
    <p>The user$ observable is being subscribed to via the async pipe, so Angular knows that the emission of values in that observable will impact the template.</p>
      <app-news-letter2 [user$]="userService.user$" (subscribe)="subscribe($event)"></app-news-letter2>
    <span *ngIf="emailReceived">received email to subscribe to {{emailReceived}} <br></span>
    <button (click)="changeUserName()">Change User Name</button>
  `
})
export class NewsLetterHome4Component {
  emailReceived: string;
  constructor(private userService: UserService) {
  }

  subscribe(email: string) {
    console.log('subscribe to :', email);
    this.emailReceived = email;
  }

  changeUserName() {
    this.userService.loadUser({firstName: 'Sati', lastName: 'Jha'});
  }
}
