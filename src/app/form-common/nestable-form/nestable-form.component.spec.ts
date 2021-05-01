import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NestableFormComponent } from './nestable-form.component';

describe('NestableFormComponent', () => {
  let component: NestableFormComponent;
  let fixture: ComponentFixture<NestableFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NestableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
