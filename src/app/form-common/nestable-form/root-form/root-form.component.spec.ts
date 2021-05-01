import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RootFormComponent } from './root-form.component';

describe('RootFormComponent', () => {
  let component: RootFormComponent;
  let fixture: ComponentFixture<RootFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RootFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
