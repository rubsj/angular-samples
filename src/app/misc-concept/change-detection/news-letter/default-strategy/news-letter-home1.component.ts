import {Component} from '@angular/core';
import {User} from 'app/misc-concept/change-detection/news-letter/model';

@Component({
  selector: 'app-news-letter-home1',
  template: `
    <p>This implementation with direct mutability of the user data works because we are using the Angular default change detection mechanism, which is compatible with direct object mutation.</p>
    <p>Angular will compare the result of the expression {{user?.firstName}} before and after the click event, a change will be detected and the template will be updated with the new value. It won't work for ONPush</p>
    <app-news-letter1 [user]="user" (subscribe)="subscribe($event)"></app-news-letter1>
    <span *ngIf="emailReceived">received email to subscribe to {{emailReceived}} <br></span>
    <button (click)="changeUserName()">Change User Name</button>
  `
})
export class NewsLetterHome1Component {
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
    this.user.firstName = 'Sati';
  }
}
