import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJquerySliderApproach1Component } from 'app/misc-concept/cva/ngx-jquery-slider/ngx-jquery-slider-approach1.component';

describe('NgxJquerySliderApproach1Component', () => {
  let component: NgxJquerySliderApproach1Component;
  let fixture: ComponentFixture<NgxJquerySliderApproach1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJquerySliderApproach1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJquerySliderApproach1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
