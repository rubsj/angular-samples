import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormExample1Component } from './simple-form-example1.component';

describe('SimpleFormExample1Component', () => {
  let component: SimpleFormExample1Component;
  let fixture: ComponentFixture<SimpleFormExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
