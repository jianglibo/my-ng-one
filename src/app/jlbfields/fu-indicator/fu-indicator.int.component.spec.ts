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
import { JlbfieldsModule } from "../jlbfields.module";
import { UploadService } from "../upload.service";

/* It's not possible to stub the component's HeroDetailService in the providers of the TestBed.configureTestingModule.
 Those are providers for the testing module, not the component. They prepare the dependency injector at the fixture level.
*/

/* Angular creates the component with its own injector, which is a child of the fixture injector.
  It registers the component's providers (the HeroDetailService in this case) with the child injector.
 A test cannot get to child injector services from the fixture injector.
 And TestBed.configureTestingModule can't configure them either.*/

// Angular has been creating new instances of the real HeroDetailService all along!

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

describe("FuIndicatorComponent integration", () => {
  let component: FuIndicatorHostComponent;
  let fixture: ComponentFixture<FuIndicatorHostComponent>;
  let uploadService: UploadService;
  let spy: jasmine.Spy;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MatProgressBarModule, HttpClientModule],
        declarations: [FuIndicatorComponent, FuIndicatorHostComponent],
        providers: [{provide: UploadService, useClass: UploadServiceMock}]
      })
        .compileComponents();
    })
  );

  beforeEach(() => {

    fixture = TestBed.createComponent(FuIndicatorHostComponent);
    component = fixture.componentInstance;
    uploadService = fixture.debugElement.injector.get(UploadService);
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
