import {Component, OnInit} from '@angular/core';
import {TwainService} from 'app/tests/twain.service';
import {from, Observable, of} from 'rxjs';
import {catchError, startWith, tap} from 'rxjs/operators';

@Component({
  selector: 'app-twain-quote',
  template: `
    <p class="twain"><i>{{quote | async}}</i></p>
    <button (click)="nextQuote()">Next quote</button>
    <button (click)="testError()">test error</button>
    <p class="error" *ngIf="errorMessage">{{ errorMessage }}</p>
  `,
  styles: [`
    .twain {
      font-style: italic
    }

    .error {
      color: red
    }
  `]
})
export class TwainAsyncComponent implements OnInit {
  errorMessage: string;
  quote: Observable<string>;

  constructor(private twainService: TwainService) {
  }

  nextQuote() {
    this.resetError();
    this.getQuote();
  }

  getQuote() {

    this.errorMessage = '';
    this.quote = this.twainService.getQuote().pipe(
      startWith('...'),
      catchError((err: any) => {
        setTimeout(() => {
          this.errorMessage = err.message || err.toString();
        });
        return of('...');
      }),
      tap(val => console.log(val)),
    );

  }

  resetError() {
    this.twainService.isTestingError = false;
  }

  testError() {
    this.twainService.isTestingError = true;
    this.getQuote();
  }

  ngOnInit(): void {
    this.getQuote();
  }

}
