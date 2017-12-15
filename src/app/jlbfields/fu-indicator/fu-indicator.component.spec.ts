import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FuIndicatorComponent } from "./fu-indicator.component";
import { MatProgressBarModule } from "@angular/material";
import { Injectable, Component, ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MEDIA_BY_IDS, Medium } from "data-shape";
import { UploadService } from '../upload.service';
import { UploadServiceMock } from "../upload-service-mock";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  // tslint:disable-next-line:component-selector
  selector: "test-host-component",
  template: `<div><app-fu-indicator [file]="file" uploadUrl="/uploadUrl"></app-fu-indicator></div>`
})
class FuIndicatorHostComponent {
  @ViewChild(
    FuIndicatorComponent
  ) /* using viewChild we get access to the TestComponent which is a child of TestHostComponent */
  public fuIndicatorComponent: FuIndicatorComponent;
  file = { name: "abc" };
}

const hc = <HttpClient>{};

describe("FuIndicatorComponent", () => {
  let component: FuIndicatorHostComponent;
  let fixture: ComponentFixture<FuIndicatorHostComponent>;
  let uploadService: UploadService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule, HttpClientTestingModule],
      declarations: [FuIndicatorComponent, FuIndicatorHostComponent],
      providers: [UploadService, {provider: HttpClient, userInstance: hc}]
    }).compileComponents();
  }));

  beforeEach(() => {
    console.log(1);
    try {
      fixture = TestBed.createComponent(FuIndicatorHostComponent);
    } catch (error) {
      console.log(error);
    }
    console.log(1);
    component = fixture.componentInstance;
    uploadService = fixture.debugElement.injector.get(UploadService);
    console.log(uploadService);
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
    component.fuIndicatorComponent.onFileUploaded.subscribe((md: Medium) => {
      uploadedMd = md;
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(spy.calls.any()).toBe(true, "upload called.");
    expect(uploadedMd.attributes.originName).toContain("v.js");
  });
});
