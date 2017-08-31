import { TestBed, inject } from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';

class Aservice {
    getQuote(): Observable<string> {
        return Observable.create(function (observer) {
            observer.next('hello');
            observer.complete();
          });
    }
}

describe('spy usage.', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: []
    });
  });

  it('spy should work', () => {
    const aservice = new Aservice();
    // const spy = spyOn(aservice, 'getQuote').and.returnValue('bbbb');
    // expect(spy.calls.any()).toBe(false);
    aservice.getQuote().subscribe(v => {
        console.log(v);
    });
    // expect(spy.calls.any()).toBe(true);
  });

  it('expects a GET request', () => {
    const observable = Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
          observer.next(4);
          observer.complete();
        }, 1000);
      });

      console.log('just before subscribe');
      observable.subscribe({
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      });
      console.log('just after subscribe');
  });
});
