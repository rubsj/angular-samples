import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from 'app/misc-concept/change-detection/news-letter/user-service';

@Component({
  selector: 'app-news-letter-home6',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>This is because we have subscribed to the user$ using the async pipe, so now the OnPush change detector of the newsletter can be triggered each time user$ emits a value.</p>
     <p>But before using the async pipe, there was no way for the framework to know that values emitted by this observable where being passed the template.</p>
    <app-news-letter4 (subscribe)="subscribe($event)"></app-news-letter4>
    <span *ngIf="emailReceived">received email to subscribe to {{emailReceived}} <br></span>
    <button (click)="changeUserName()">Change User Name</button>
  `
})
export class NewsLetterHome6Component {

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
