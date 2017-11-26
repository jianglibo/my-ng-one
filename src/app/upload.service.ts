import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ListBody } from './dto/list-body';
import { MediumAttributes } from './dto/medium-attributes';
import { Medium } from './dto/medium';


@Injectable()
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(file: File, uploadUrl: string): Observable<number | Medium> {
    return Observable.create(function subscribe(observer) {
      try {
        console.log("uploadUrl: " + uploadUrl);
        let formData = new FormData();
        formData.append('file', file);

        const req = new HttpRequest('POST', uploadUrl, formData, {
          reportProgress: true,
          headers: new HttpHeaders({'Content-Type': undefined})
        });

        this.http.request(req).subscribe(event => {
          // Via this API, you get access to the raw event stream.
          // Look for upload progress events.
          if (event.type === HttpEventType.UploadProgress) {
            observer.next(Math.round(100 * event.loaded / event.total));
          } else if (event instanceof HttpResponse) {
            let lb: ListBody<MediumAttributes, Medium> = event.body as ListBody<MediumAttributes, Medium>;
            observer.next(lb.data);
          }
        });
      } catch (err) {
        observer.error(err); // delivers an error if it caught one
      }
    });
  }

}
