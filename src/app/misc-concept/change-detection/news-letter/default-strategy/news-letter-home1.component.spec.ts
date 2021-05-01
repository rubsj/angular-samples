import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsLetterHome1Component } from 'app/misc-concept/change-detection/news-letter/default-strategy/news-letter-home1.component';

describe('NewsLetterHome1Component', () => {
  let component: NewsLetterHome1Component;
  let fixture: ComponentFixture<NewsLetterHome1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLetterHome1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetterHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
