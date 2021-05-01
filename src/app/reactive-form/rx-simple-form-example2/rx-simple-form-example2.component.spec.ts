import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RxSimpleFormExample2Component } from './rx-simple-form-example2.component';

describe('RxSimpleFormExample2Component', () => {
  let component: RxSimpleFormExample2Component;
  let fixture: ComponentFixture<RxSimpleFormExample2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSimpleFormExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSimpleFormExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
