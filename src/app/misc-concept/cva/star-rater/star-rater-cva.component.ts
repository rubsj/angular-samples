import {Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface Star {
  stars: number;
  text: string;
}

export const ratings: Star[] = [
  {
    stars: 1,
    text: 'must GTFO ASAP'
  },
  {
    stars: 2,
    text: 'meh'
  },
  {
    stars: 3,
    text: 'it\'s ok'
  },
  {
    stars: 4,
    text: 'I\'d be sad if a black hole ate it'
  },
  {
    stars: 5,
    text: '10/10 would write review on Amazon'
  }
]

@Component({
  selector: 'app-star-rater-cva',
  template: `
    <p>Rating : {{star.text}}</p>
    <input type="number" [(ngModel)]="star.stars" (change)="onChanged()">
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: StarRaterCvaComponent,
    multi: true
  }]
})
export class StarRaterCvaComponent implements ControlValueAccessor {
  disabled: boolean;

  star: Star;
  onChanged = () => { };
  onTouched = () => { };

  writeValue(val: any): void {
    this.star = val;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

/*  setRating(star: any) {
    if(!this.disabled) {
      this._value = star.stars;
      this.ratingText = star.text;
      this.onChanged(star.stars);
      this.onTouched();
    }
  }*/

}
