import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'rj-jquery-usage',
  templateUrl: './jquery-slider-usage.component.html'
})
export class JquerySliderUsageComponent {
  sliderValue = 11;
  tempalteSliderVal = 12;
  sliderCtrl = new FormControl(11);

  onSliderValueChange(v) {
    this.sliderValue = v;
  }

  setSliderValue($event) {
    this.sliderValue = $event.currentTarget.value;
  }

  updateSlider($event) {
    this.sliderCtrl.patchValue($event.currentTarget.value, {emitModelToViewChange: true});
  }
}
