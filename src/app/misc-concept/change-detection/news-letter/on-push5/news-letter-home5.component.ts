import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from 'app/misc-concept/change-detection/news-letter/user-service';

@Component({
  selector: 'app-news-letter-home5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>this implementation of the Newsletter component does not work with OnPush change detection !</p>
    <p>Does this mean that with OnPush we cannot deeply inject services in our component tree ? No, we simply need to make sure that any
      observables that we inject directly via constructor services are subscribed to at the template level using the async pipe: See solution in onpush 6</p>
    <app-news-letter3 (subscribe)="subscribe($event)"></app-news-letter3>
    <span *ngIf="emailReceived">received email to subscribe to {{emailReceived}} <br></span>
    <button (click)="changeUserName()">Change User Name</button>
  `
})
export class NewsLetterHome5Component {

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
