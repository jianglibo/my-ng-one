import { async, fakeAsync, tick } from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/scan';

describe('rxjs create usage.', () => {
    it('spy should work', () => {
        let cc: number;
        const numbers = Observable.of(10, 20, 30);
        numbers.scan((acc, value, idx) => {
            return acc + value;
        }).subscribe((c: number) => {
            cc = c;
        });
        expect(cc).toBe(60);
     });

     it('async rxjs should work', fakeAsync(() => {
        let itm: number;
        const foo = Observable.create(function (observer) {
            console.log('Hello');
            observer.next(42);
            observer.next(100);
            observer.next(200);
            observer.complete();
          });

          foo.subscribe((i: number) => {
            console.log(i);
            itm = i;
          },
          (err) => {},
          () => {
            console.log('complete');
            expect(itm).toBe(200);
          }
        );
        tick();
        console.log('dddddddddddddddd');
     }));
});
