import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'rj-tmp--custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class TemplateCustomValidationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('received form : ' , form);
  }

}
