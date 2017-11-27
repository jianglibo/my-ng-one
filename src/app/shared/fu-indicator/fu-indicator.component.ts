import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpRequest, HttpHeaders, HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { Medium } from '../../dto/medium';
import { ListBody } from '../../dto/list-body';
import { MediumAttributes } from '../../dto/medium-attributes';
import { UploadService } from '../../upload.service';

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


  @Output() onFileUploaded = new EventEmitter<Medium>();

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    let that = this;
    if (this.file) {
      this.uploadService.upload(this.file, this.uploadUrl).subscribe(function(v: number| Medium) {
        if (typeof v === 'number') {
          that.percentDone = v;
        } else {
          that.onFileUploaded.emit(v);
        }
      });
    }
  }
}
