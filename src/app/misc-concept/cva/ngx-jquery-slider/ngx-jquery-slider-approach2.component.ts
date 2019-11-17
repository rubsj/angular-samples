import {Component, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

declare const $: any;

@Component({
  selector: 'app-ngx-jquery-slider-cva',
  templateUrl: './ngx-jquery-slider-approach2.component.html',
  styles: ['div {width : 500px}'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NgxJquerySliderApproach2Component,
    multi: true
  }]
})
export class NgxJquerySliderApproach2Component implements ControlValueAccessor, OnInit {
  @ViewChild('location', {static: true}) location;
  widget: any;
  // tslint:disable-next-line:ban-types
  onChange: Function;
  value: any;

  ngOnInit(): void {
    this.widget = $(this.location.nativeElement).slider(this.value);
    this.widget.on('slidestop', (event, ui) => {
      this.onChange(ui.value);
    });
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  /*
  you should see the interaction with a parent component is different,
  while the interaction with the underlining slider widget is the same.
  * We use writeValue where we used ngOnChanges in the simple wrapper
  * and call this.onChange where we emitted value before with this.valueChange.emit(ui.value).
  */
  writeValue(val: any): void {
    this.value = val;
    if (this.widget && val) {
      this.widget.slider('value', val);
    }
  }

}
