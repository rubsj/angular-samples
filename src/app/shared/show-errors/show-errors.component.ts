import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, AbstractControlDirective} from '@angular/forms';

@Component({
  selector: 'rj-show-errors',
  template: `
    <ul *ngIf="shouldShowErrors()">
      <li *ngFor="let err of listOfErrors()">{{err}} </li>
    </ul>
  `,
  styles: ['li {color : red}']
})
export class ShowErrorsComponent {
  private static readonly errorMessages = {
    required: () => 'This field is required',
    minlength: (params) => 'The min number of characters is ' + params.requiredLength,
    maxlength: (params) => 'The max allowed number of characters is ' + params.requiredLength,
    pattern: (params) => 'The required pattern is: ' + params.requiredPattern,
    countryCity: (params) => params.message,
    uniqueName: (params) => params.message,
    telephoneNumbers: (params) => params.message,
    telephoneNumber: (params) => params.message,
    years: (params) => params.message,
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
  }

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && (this.control.touched || this.control.dirty);
  }

  private getMessage(type: string, params: any) {
    if (ShowErrorsComponent.errorMessages[type]) {
      return ShowErrorsComponent.errorMessages[type](params);
    } else {
      return JSON.stringify(this.control.errors[type]);
    }

  }
}
