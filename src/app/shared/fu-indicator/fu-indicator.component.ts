import { Component, OnInit, Input } from '@angular/core';
import { HttpRequest, HttpHeaders, HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fu-indicator',
  templateUrl: './fu-indicator.component.html',
  styleUrls: ['./fu-indicator.component.css']
})
export class FuIndicatorComponent implements OnInit {

  @Input() file: File;

  percentDone = 0;
  uploading: boolean;
  @Input() uploadUrl: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("uploadUrl: " + this.uploadUrl);
    this.uploading = true;
    let formData = new FormData();
    formData.append('file', this.file);

    const req = new HttpRequest('POST', this.uploadUrl, formData, {
      reportProgress: true,
      headers: new HttpHeaders({'Content-Type': undefined})
    });

    this.http.request(req).subscribe(event => {
      // Via this API, you get access to the raw event stream.
      // Look for upload progress events.
      if (event.type === HttpEventType.UploadProgress) {
        // This is an upload progress event. Compute and show the % done:
        this.percentDone = Math.round(100 * event.loaded / event.total);
        console.log(`File is ${this.percentDone}% uploaded.`);
      } else if (event instanceof HttpResponse) {
        this.uploading = false;
        console.log('File is completely uploaded!');
      }
    });
  }

}
