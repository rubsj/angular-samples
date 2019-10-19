import { async, ComponentFixture, TestBed } from '@angular/core/testing';


class CustomValidationComponent {
}

describe('CustomValidationComponent', () => {
  let component: CustomValidationComponent;
  let fixture: ComponentFixture<CustomValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
