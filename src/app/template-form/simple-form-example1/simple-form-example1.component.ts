import {Component, OnInit} from '@angular/core';
import {Address} from 'app/shared/model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-simple-form-example1',
  templateUrl: './simple-form-example1.component.html',
  styleUrls: ['./simple-form-example1.component.css']
})
export class SimpleFormExample1Component implements OnInit {
  phoneNumberIds: number[] = [1];
  addresses: [{ address: Address, id: number }]
    = [{address: {addressLine1: 'primary addr line 1'}, id: 1}];
  private count = 1;
  private addressCount = 1;

  constructor() {
  }

  ngOnInit() {
  }

  removePhone(i: number) {
    this.phoneNumberIds.splice(i, 1);
  }

  addPhone() {
    this.phoneNumberIds.push(++this.count);
  }

  removeAddress(id: number) {
    const idIndex = this.addresses.findIndex(addr => addr.id === id);
    this.addresses.splice(idIndex, 1);
  }

  addAddress() {
    this.addresses.push({
      address: {
        addressLine1 : 'default line 1',
        addressLine2 : 'default line 2',
      },
      id: ++this.addressCount
    });
  }


  register(myForm: NgForm) {
    console.log('Successful registration');
    console.log(myForm);
  }
}
