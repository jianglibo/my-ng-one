import { Component, OnInit, Input, EventEmitter, Output, Inject } from "@angular/core";
import { Medium, ListBody, MediumAttributes } from "data-shape";
import { UploadService } from "../upload.service";
import { inject } from '@angular/core/testing';

@Component({
  selector: "app-fu-indicator",
  templateUrl: "./fu-indicator.component.html",
  styleUrls: ["./fu-indicator.component.css"]
})
export class FuIndicatorComponent implements OnInit {
  @Input() file: File;

  percentDone = 0;
  uploading: boolean;
  @Input() uploadUrl: string;

  @Output() onFileUploaded = new EventEmitter<Medium>();

  constructor(@Inject(UploadService) private uploadService: UploadService) {}

  ngOnInit() {
    let that = this;
    if (this.file) {
      this.uploadService
        .upload(this.file, this.uploadUrl)
        .subscribe(function(v: number | Medium) {
          if (typeof v === "number") {
            that.percentDone = v;
          } else {
            that.onFileUploaded.emit(v);
          }
        });
    }
  }
}
