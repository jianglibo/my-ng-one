import { Component, OnInit, Input } from '@angular/core';
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
  set maxSelect(v: string) {
    let i = parseInt(v, 10);
    if (i > 0) {
      this._maxSelect = i;
    } else {
      this._maxSelect = 1;
    }
  }

  get allDone(): boolean {
    return this.files.length === this.media.length;
  }

  files: File[] = [];

  media: Medium[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onFileUploaded(m: Medium) {
    this.media.push(m);
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
