import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IsolatedFormComponent } from './isolated-form.component';

describe('IsolatedFormComponent', () => {
  let component: IsolatedFormComponent;
  let fixture: ComponentFixture<IsolatedFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolatedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsolatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
