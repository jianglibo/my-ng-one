import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed,
  inject
} from "@angular/core/testing";

import { FuIndicatorComponent } from "./fu-indicator.component";
import { MatProgressBarModule } from "@angular/material";
import { Injectable, Component, ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MEDIA_BY_IDS, Medium } from "data-shape";
import { UploadServiceMock } from "../upload-service-mock";
import {
  HttpClient
} from "@angular/common/http";
import { JlbfieldsModule } from "../jlbfields.module";
import { UploadService } from "../upload.service";


describe("FuIndicatorComponent iso", () => {
  let component: FuIndicatorComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule],
      // declarations: [FuIndicatorHostComponent, FuIndicatorComponent],
      providers: [
        FuIndicatorComponent, {provide: UploadService, useClass: UploadServiceMock}]
    });
  });

  beforeEach(
    inject([FuIndicatorComponent], (fuhi: FuIndicatorComponent) => {
      component = fuhi;
    })
  );

  it("should create", () => {
    console.log(component);
  });
});
