import {Component, OnInit, ViewChild} from '@angular/core';
import {Person} from 'app/misc-concept/cva/person/person-cva.component';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{
  @ViewChild('myForm', {static: true}) form;
  familyGroup: FormGroup;
  familyArrayControl = new FormArray([]);

  people: any = {
    friends: [{
      name: 'Jane',
      age: '66',
      gender: 'female'
    },
      {
        name: 'Bob',
        age: '50',
        gender: 'male'
      }
    ],
    family: [
      {
        name: 'John',
        age: '50',
        gender: 'male'
      },
      {
        name: 'Kate',
        age: '66',
        gender: 'female'
      },
    ],
    acquaintances: [],
  };

  ngOnInit(): void {
    this.familyGroup = new FormGroup({ });
    this.familyGroup.addControl('familyArray', this.familyArrayControl);
    if (this.people) {
      for (const familyMem of this.people.family) {
        (<FormArray> this.familyGroup.controls.familyArray).push(new FormControl(familyMem));
      }
    }
  }

  addFriend() {
    const person: Person = {};
    this.people.friends.push(person);
  }

  addFamily() {
    const familyControl = new FormControl({});
    (<FormArray> this.familyGroup.controls.familyArray).push(familyControl);
  }

  constructor() { }

  trackByIndex(index) {
    return index;
  }

  onPersonChange() {
    console.log('Saw a person change. New list of friends:',
      this.people.friends);
  }

  onFamilyChange(index: number) {
    const familyControl = this.familyArrayControl.at(index);
    console.log(`changed array at index ${index} with control value : ${familyControl.value}`);
    this.onPersonChange();
  }
}
