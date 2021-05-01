import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgTemplateExampleComponent } from './ng-template-example.component';

describe('NgTemplateExampleComponent', () => {
  let component: NgTemplateExampleComponent;
  let fixture: ComponentFixture<NgTemplateExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
