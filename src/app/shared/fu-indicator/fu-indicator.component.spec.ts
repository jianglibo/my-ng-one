import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuIndicatorComponent } from './fu-indicator.component';
import { MatProgressBarModule } from '@angular/material';
import { Injectable, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MEDIA_BY_IDS } from '../../fixtures/mediabyids';
import { Medium } from '../../dto/medium';
import { UploadService } from '../../upload.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector : 'test-host-component',
  template :
  `<div><app-fu-indicator [file]="file" uploadUrl="/uploadUrl"></app-fu-indicator></div>`
})
class TestHostComponent {
  @ViewChild(FuIndicatorComponent) /* using viewChild we get access to the TestComponent which is a child of TestHostComponent */
  public testComponent: FuIndicatorComponent;
  file = {name: "abc"};
}


@Injectable()
class UploadServiceMock {
    constructor() {
    }
    upload(file: File, uploadUrl: string): Observable<number | Medium> {
      return Observable.create(function subscribe(observer) {
        observer.next(50);
        console.log("in observer.");
        observer.next(MEDIA_BY_IDS.data[0]);
        observer.complete();
      });
    }
  }

fdescribe('FuIndicatorComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let uploadService: UploadService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule],
      declarations: [ FuIndicatorComponent, TestHostComponent ],
      providers: [{provide: UploadService, useClass: UploadServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    uploadService = fixture.debugElement.injector.get(UploadService);
    spy = spyOn(uploadService, 'upload').and.returnValue(
      Observable.create(function subscribe(observer) {
        observer.next(50);
        console.log("in observer.");
        observer.next(MEDIA_BY_IDS.data[0]);
        observer.complete();
      })
    );
  });

  it('should create', () => {
    let uploadedMd: Medium;
    component.testComponent.onFileUploaded.subscribe((md: Medium) => {
      uploadedMd = md;
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(spy.calls.any()).toBe(true, 'upload called.');
    expect(uploadedMd.attributes.originName).toContain("v.js");
  });
});
