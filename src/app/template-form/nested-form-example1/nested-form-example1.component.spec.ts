import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NestedFormExample1Component } from './nested-form-example1.component';

describe('NestedFormExample1Component', () => {
  let component: NestedFormExample1Component;
  let fixture: ComponentFixture<NestedFormExample1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
