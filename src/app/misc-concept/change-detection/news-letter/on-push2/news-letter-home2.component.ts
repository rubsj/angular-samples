import {ChangeDetectionStrategy, Component} from '@angular/core';
import {User} from 'app/misc-concept/change-detection/news-letter/model';

@Component({
  selector: 'app-news-letter-home2',
  changeDetection : ChangeDetectionStrategy.OnPush,
  template: `
    <p>Avoiding direct object mutation with OnPush</p>
    <p>If we would change the implementation of changeUserName() to create a new user instance instead of mutating the existing instance, everything would work as expected</p>
    <app-news-letter1 [user]="user" (subscribe)="subscribe($event)"></app-news-letter1>
    <span *ngIf="emailReceived">received email to subscribe to {{emailReceived}} <br></span>
    <button (click)="changeUserName()">Change User Name</button>
  `
})
export class NewsLetterHome2Component {

  emailReceived: string;
  user: User = {
    firstName: 'Ruby',
    lastName: 'Jha'
  };

  constructor() {
  }

  subscribe(email: string) {
    console.log('subscribe to :', email);
    this.emailReceived = email;
  }

  changeUserName() {
    this.user = {
      firstName: 'Sati',
      lastName: 'Jha'
    };
  }

}
