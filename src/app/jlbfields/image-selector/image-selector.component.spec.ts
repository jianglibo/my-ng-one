import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ImageSelectorComponent } from './image-selector.component';
import { Injectable, Component, ViewChild, DebugElement } from '@angular/core';
import { Medium, MEDIA_BY_IDS } from 'data-shape';
import { Observable } from 'rxjs/Observable';
import { FuComponent } from '../fu/fu.component';
import { MatProgressBarModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FuIndicatorComponent } from '../fu-indicator/fu-indicator.component';
import { By } from '@angular/platform-browser';
import { UploadService } from '../upload.service';
import { UploadServiceMock } from '../upload-service-mock';

const IMG_URL = 'http://localhost:80/uploaded/e42413a752f64421b614102a9f0f1f71.js';

@Component({
  // tslint:disable-next-line:component-selector
  selector : 'test-host-component',
  template :
  `<div><app-image-selector noImgTitle="No Image." selectorTitle="Select An Image."></app-image-selector></div>`
})
class TestHostComponent {
  @ViewChild(ImageSelectorComponent) /* using viewChild we get access to the TestComponent which is a child of TestHostComponent */
  public testComponent: ImageSelectorComponent;
}

describe('ImageSelectorComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatProgressBarModule, HttpClientTestingModule],
      declarations: [ FuComponent, FuIndicatorComponent, TestHostComponent, ImageSelectorComponent ],
      providers: [{provide: UploadService, useClass: UploadServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should display no image selected.', fakeAsync(() => {
    let dl: DebugElement;
    // let fl: FileList = new FileListMock(new FileMock("a", 55));
    // component.testComponent.fuComponent.handleFiles(fl);
    fixture.detectChanges(); // update view with quote
    dl = fixture.debugElement.query(By.css('span'));
    expect(dl.nativeElement.textContent).toBe('No Image.');
    dl = fixture.debugElement.query(By.css('app-fu a'));
    expect(dl.nativeElement.textContent).toBe('Select An Image.');
  }));

  it('should display selected image.', fakeAsync(() => {
    let dl: DebugElement;
    // let fl: FileList = new FileListMock(new FileMock("a", 55));
    fixture.detectChanges(); // update view with quote
    component.testComponent.onImgUploaded(MEDIA_BY_IDS.data[0]);
    fixture.detectChanges();
    dl = fixture.debugElement.query(By.css('span'));
    expect(dl).toBeNull();
    dl = fixture.debugElement.query(By.css('app-fu a'));
    expect(dl.nativeElement.textContent).toBe('Select An Image.');
  }));
});
