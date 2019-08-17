import {Component, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-phone-template',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class PhoneComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
