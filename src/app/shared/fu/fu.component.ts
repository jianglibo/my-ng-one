import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEventType, HttpResponse } from '@angular/common/http';
import { Medium } from '../../dto/medium';

@Component({
  selector: 'app-fu',
  templateUrl: './fu.component.html',
  styleUrls: ['./fu.component.css']
})
export class FuComponent implements OnInit {
  uploadUrl: string;
  private _maxSelect = 1;

  @Input()
  selectorTitle = 'Please Select a File.';

  @Output() onOneFileUploaded = new EventEmitter<Medium>();
  @Output() onAllFileUploaded = new EventEmitter<Medium[]>();

  @Input()
  set maxSelect(v: string) {
    if (v) {
      let i = parseInt(v, 10);
      if (i > 0) {
        this._maxSelect = i;
      } else {
        this._maxSelect = 1;
      }
    }
  }

  files: File[] = [];

  media: Medium[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onFileUploaded(m: Medium) {
    this.media.push(m);
    this.onOneFileUploaded.emit(m);
    if (this.files.length === this.media.length) {
      this.onAllFileUploaded.emit(this.media);
    }
  }

  handleFiles(fileList: FileList) {
    let localFiles: File[] = [];
    let max = fileList.length > this._maxSelect ? this._maxSelect : fileList.length;
    for (let i = 0; i < max; i++) {
      localFiles.push(fileList.item(i));
    }
    this.files = localFiles;
  }
}
