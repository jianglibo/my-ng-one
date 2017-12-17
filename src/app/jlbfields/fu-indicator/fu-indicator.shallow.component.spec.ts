import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from "@angular/core/testing";

import { FuIndicatorComponent } from "./fu-indicator.component";
import { MatProgressBarModule } from "@angular/material";
import { Injectable, Component, ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MEDIA_BY_IDS, Medium } from "data-shape";
import { UploadServiceMock } from "../upload-service-mock";
import {
  HttpClient,
  HttpClientModule,
  HttpHandler
} from "@angular/common/http";
import { UploadService } from "../upload.service";

describe("FuIndicatorComponent shallow", () => {
  let component: FuIndicatorComponent;
  let fixture: ComponentFixture<FuIndicatorComponent>;
  let uploadService: UploadService;
  let spy: jasmine.Spy;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MatProgressBarModule],
        declarations: [FuIndicatorComponent],
        providers: [{provide: UploadService, useClass: UploadServiceMock}]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FuIndicatorComponent);
    uploadService = fixture.debugElement.injector.get(UploadService);
    component = fixture.componentInstance;
    spy = spyOn(uploadService, "upload").and.returnValue(
      Observable.create(function subscribe(observer) {
        observer.next(50);
        observer.next(MEDIA_BY_IDS.data[0]);
        observer.complete();
      })
    );
  });

  it("should create", () => {
    let uploadedMd: Medium;
    component.onFileUploaded.subscribe((md: Medium) => {
      uploadedMd = md;
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
    // expect(spy.calls.any()).toBe(true, "upload called.");
    // expect(uploadedMd.attributes.originName).toContain("v.js");
  });
});
