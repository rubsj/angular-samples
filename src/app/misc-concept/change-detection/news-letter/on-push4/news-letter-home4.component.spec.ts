import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsLetterHome4Component } from 'app/misc-concept/change-detection/news-letter/on-push4/news-letter-home4.component';

describe('NewsLetterHome4Component', () => {
  let component: NewsLetterHome4Component;
  let fixture: ComponentFixture<NewsLetterHome4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLetterHome4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetterHome4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
