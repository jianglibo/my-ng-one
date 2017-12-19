import { MEDIA_BY_IDS, Medium } from 'data-shape-ng';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadServiceMock {
    constructor() {
    }
    upload(file: File, uploadUrl: string): Observable<number | Medium> {
      return Observable.create(function subscribe(observer) {
        observer.next(50);
        observer.next(MEDIA_BY_IDS.data[0]);
        observer.complete();
      });
    }
 }
