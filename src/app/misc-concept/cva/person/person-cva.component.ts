import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface Person {
  name?: string;
  age?: number;
  gender?: 'male' | 'female';
}

const PERSON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PersonCvaComponent),
  multi: true,
};

@Component({
  selector: 'app-person-cva',
  templateUrl: './person-cva.component.html',
  styleUrls : ['./person-cva.component.css'],
  providers: [PERSON_VALUE_ACCESSOR]
})
export class PersonCvaComponent implements ControlValueAccessor {
  person: Person;
  onChange: () => void;

  registerOnChange(fn: any): void {
    this.onChange = () => {
      console.log('Propagating change');
      fn(this.person);
    };
  }

  registerOnTouched(fn: any): void {
    return;
  }

  writeValue(val: any): void {
    console.log('write value called with : ', val);
    if (val) {
      this.person = val;
    }
  }
}
