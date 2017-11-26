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
  maxSelect = 1;

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
    console.log(fileList);
    console.log(typeof fileList);
    let localFiles: File[] = [];
    for (let i = 0; i < fileList.length; i++) {
      localFiles.push(fileList.item(i));
    }
    this.files = localFiles;
  }
}
