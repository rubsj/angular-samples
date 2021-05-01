import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


class CustomValidationComponent {
}

xdescribe('CustomValidationComponent', () => {
  let component: CustomValidationComponent;
  let fixture: ComponentFixture<CustomValidationComponent>;

  beforeEach(waitForAsync(() => {
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
