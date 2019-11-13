import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
})
export class TimeComponent {
  text = 'Original text in parent component';
  _intervalTime: number;
  _time: number;

  get timeGivingError() {
    return Date.now();
  }

  get time() {
    return this._time;
  }

  get intervalTime() {
    return this._intervalTime;
  }

  constructor(zone: NgZone) {
    this._time = Date.now();
    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._intervalTime = Date.now();
      }, 1);
    });
  }

}
