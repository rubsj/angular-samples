import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-rx-simple-form-example1',
  templateUrl: './rx-simple-form-example1.component.html',
  styleUrls: ['./rx-simple-form-example1.component.css']
})
export class RxSimpleFormExample1Component implements OnInit {
  myForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      birthYear: new FormControl(),
      location: new FormGroup({
        country: new FormControl(),
        city: new FormControl(),
      }),
      phoneNumbers: new FormArray([new FormControl('')]),
    });
  }

  get phoneNumbers(): FormArray {
    return this.myForm.get('phoneNumbers') as FormArray;
  }

  printMyForm() {
    console.log(this.myForm);
  }

  remove(i: number) {
    (<FormArray> this.myForm.get('phoneNumbers')).removeAt(i);
  }

  add() {
    (<FormArray> this.myForm.get('phoneNumbers')).push(new FormControl(''));
  }

  register() {
    console.log('Registration successful.');
    console.log(this.myForm.value);
  }

}
