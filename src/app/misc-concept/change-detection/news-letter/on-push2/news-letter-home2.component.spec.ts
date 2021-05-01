import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsLetterHome2Component } from 'app/misc-concept/change-detection/news-letter/on-push2/news-letter-home2.component';

describe('NewsLetterHome2Component', () => {
  let component: NewsLetterHome2Component;
  let fixture: ComponentFixture<NewsLetterHome2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLetterHome2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetterHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
