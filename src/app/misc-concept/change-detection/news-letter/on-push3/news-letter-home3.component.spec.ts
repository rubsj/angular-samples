import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterHome3Component } from 'app/misc-concept/change-detection/news-letter/on-push3/news-letter-home3.component';

describe('NewsLetterHome3Component', () => {
  let component: NewsLetterHome3Component;
  let fixture: ComponentFixture<NewsLetterHome3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLetterHome3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetterHome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
