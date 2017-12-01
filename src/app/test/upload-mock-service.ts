import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Medium } from "../dto/medium";
import { MEDIA_BY_IDS } from "../fixtures/mediabyids";


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
