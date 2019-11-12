import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterHome5Component } from 'app/misc-concept/change-detection/news-letter/on-push5/news-letter-home5.component';

describe('NewsLetterHome6Component', () => {
  let component: NewsLetterHome5Component;
  let fixture: ComponentFixture<NewsLetterHome5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLetterHome5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetterHome5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
