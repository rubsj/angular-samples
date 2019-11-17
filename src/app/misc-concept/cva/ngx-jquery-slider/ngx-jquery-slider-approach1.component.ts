import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider-approach1.component.html',
  styles: ['div {width : 500px}']
})
export class NgxJquerySliderApproach1Component implements OnInit, OnChanges {
  @ViewChild('location', {static: true}) location;
  @Input() value;
  @Output() private valueChange = new EventEmitter();
  widget: any;

  constructor() {
  }

  ngOnInit() {
    this.widget = $(this.location.nativeElement).slider();
    this.widget.slider('value', this.value);
    this.widget.on('slidestop', (event, ui) => {
      this.valueChange.emit(ui.value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.widget && this.widget.slider('value') !== this.value) {
      this.widget.slider('value', this.value);

    }
  }
}
