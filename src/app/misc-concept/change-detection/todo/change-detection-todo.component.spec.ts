import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionTodoComponent } from 'app/misc-concept/change-detection/todo/change-detection-todo.component';

describe('ChangeDetectionTodoComponent', () => {
  let component: ChangeDetectionTodoComponent;
  let fixture: ComponentFixture<ChangeDetectionTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
