import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {countryCityValidator} from 'app/shared/validators/country-city-validator.directive';
import {telephoneNumbersValidator} from 'app/shared/validators/telephone-numbers-validator.directive';
import {telephoneNumberFormatValidator} from 'app/shared/validators/telephone-number-format-validator.directive';

@Component({
  selector: 'app-rx-simple-form-example2',
  templateUrl: './rx-simple-form-example2.component.html',
  styleUrls: ['./rx-simple-form-example2.component.css']
})
export class RxSimpleFormExample2Component implements OnInit {
  myForm: FormGroup;
  name: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
        name: ['', Validators.required],
      birthYear: ['', Validators.compose([Validators.required, Validators.pattern('^\\d{4,4}$') ])],
      location: this.formBuilder.group({
        country : [''],
        city: ['']
      }, countryCityValidator),
      phoneNumbers: this.formBuilder.array([this.formBuilder.control('' , telephoneNumberFormatValidator)] ),
      }, telephoneNumbersValidator);
    this.name = <FormControl> this.myForm.controls.name;
  }


  printMyForm() {
    console.log(this.myForm);
  }

  register() {
    console.log('Registration successful.');
    console.log(this.myForm.value);
  }


  remove(i: number) {
    (<FormArray> this.myForm.get('phoneNumbers')).removeAt(i);
  }

  add() {
    (<FormArray> this.myForm.get('phoneNumbers')).push(this.formBuilder.control('' , telephoneNumberFormatValidator));
  }


}
