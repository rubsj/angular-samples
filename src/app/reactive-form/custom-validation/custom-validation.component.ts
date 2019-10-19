import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ageValidator, numberOnly} from 'app/shared/age-validator-directive.directive';

@Component({
  selector: 'rj-rx-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class ReactiveCustomValidationComponent implements OnInit {
  myForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      fullName: new FormControl(''),
      age: new FormControl('', [Validators.required, ageValidator, numberOnly()]),
    });
  }

  get age() {
    return this.myForm.get('age');
  }

  onSubmit() {
    console.log('the reactive form : ', this.myForm);
    console.log('errors are : ', this.myForm.get('age').errors);
  }

}

