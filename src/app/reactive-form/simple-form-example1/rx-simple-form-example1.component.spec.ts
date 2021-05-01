import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RxSimpleFormExample1Component } from 'app/reactive-form/simple-form-example1/rx-simple-form-example1.component';

describe('RxSimpleFormExample1Component', () => {
  let component: RxSimpleFormExample1Component;
  let fixture: ComponentFixture<RxSimpleFormExample1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSimpleFormExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSimpleFormExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
