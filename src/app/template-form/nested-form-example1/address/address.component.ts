import { Component, OnInit } from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-address-template',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  viewProviders: [{provide: ControlContainer , useExisting : NgForm}]
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
