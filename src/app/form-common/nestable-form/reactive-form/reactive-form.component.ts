import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent implements OnInit {
  sampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sampleForm = this.formBuilder.group({
      input3: ['', Validators.required]
    });
  }

}
