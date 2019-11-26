import {defer, of, throwError} from 'rxjs';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TwainAsyncComponent} from 'app/tests/twain-async.component';
import {TwainService} from 'app/tests/twain.service';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

// https://github.com/angular/angular/blob/master/aio/content/examples/testing/src/app/twain/twain.component.spec.ts

describe('tests TwainAsyncComponent', () => {
  const testQuote = 'Test Quote';
  let twainService;
  let getQuoteSpy;
  let fixture: ComponentFixture<TwainAsyncComponent>;
  let component: TwainAsyncComponent;
  let quoteE1: HTMLElement;

  beforeEach(() => {
    twainService = jasmine.createSpyObj('TwainService', ['getQuote', 'isTestingError']);
    getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));
    TestBed.configureTestingModule({
      declarations: [TwainAsyncComponent],
      providers: [{
        provide: TwainService, useValue: twainService
      }]
    });

    fixture = TestBed.createComponent(TwainAsyncComponent);
    component = fixture.componentInstance;
    quoteE1 = fixture.nativeElement.querySelector('.twain');
  });

  afterEach(() => {
    fixture = null;
    twainService = null;
  });

  it('should show quote after component initialized', () => {
    fixture.detectChanges();
    expect(quoteE1.textContent).toBe(testQuote);
    expect(getQuoteSpy.calls.any()).toBe(true, 'getQuote Called');
  });


  it('should display error when TwainService fails', fakeAsync(() => {
    getQuoteSpy.and.returnValue(throwError('TwainService test failure'));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.errorMessage).toBe('TwainService test failure', 'should display error');
    expect(quoteE1.textContent).toBe('...', 'should show placeholder');
  }));


  describe('when test with asynchronous observable', () => {

    it('should show quote after getQuote (fakeAsync)', fakeAsync(() => {
      getQuoteSpy.and.returnValue(defer(() => {
        return Promise.resolve(testQuote);
      }));
      fixture.detectChanges();
      console.log(fixture);
      expect(quoteE1.textContent).toBe('...', 'should show placeholder');
      tick();
      fixture.detectChanges();
      expect(quoteE1.textContent).toBe(testQuote, 'should show quote');
      expect(component.errorMessage).toBeFalsy('should not show error');
    }));
  });

  it('should show quote after getQuote (async)', async () => {
    getQuoteSpy.and.returnValue(defer(() => {
      return Promise.resolve(testQuote);
    }));
    fixture.detectChanges();
    console.log(fixture);
    expect(quoteE1.textContent).toBe('...', 'should show placeholder');

    await fixture.whenStable();
    fixture.detectChanges();
    expect(quoteE1.textContent).toBe(testQuote, 'should show quote');
    expect(component.errorMessage).toBeFalsy('should not show error');
  });
});
