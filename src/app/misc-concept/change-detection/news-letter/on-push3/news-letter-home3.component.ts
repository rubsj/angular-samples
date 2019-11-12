import {ChangeDetectionStrategy, Component} from '@angular/core';
import {User} from 'app/misc-concept/change-detection/news-letter/model';
import {UserService} from 'app/misc-concept/change-detection/news-letter/user-service';

@Component({
  selector: 'app-news-letter-home3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>we have injected the UserService</p>
    <p>we have consumed the userService.user$ observable directly in the home component using the async pipe</p>
    <p>With this implementation of the home component that uses the observable user service, everything is still working correctly</p>
    <p>This is because we have emitted a new user object via the observable, so from the point of view of the newsletter component a new user object instance is still being received, so everything still works.</p>
    <app-news-letter1 [user]="userService.user$ | async" (subscribe)="subscribe($event)"></app-news-letter1>
    <span *ngIf="emailReceived">received email to subscribe to {{emailReceived}} <br></span>
    <button (click)="changeUserName()">Change User Name</button>
  `
})
export class NewsLetterHome3Component {
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
