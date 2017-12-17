import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FuComponent } from './fu.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FuIndicatorComponent } from '../fu-indicator/fu-indicator.component';
import { Injectable, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Medium, MEDIA_BY_IDS } from 'data-shape';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { UploadService } from '../upload.service';
import { UploadServiceMock } from '../upload-service-mock';
import { FileListMock } from '../file-list-mock';
import { FileMock } from '../file-mock';

@Component({
  // tslint:disable-next-line:component-selector
  selector : 'test-host-component',
  template :
  `<div><app-fu maxSelect="2"></app-fu></div>`
})
class TestHostComponent {
  @ViewChild(FuComponent) /* using viewChild we get access to the TestComponent which is a child of TestHostComponent */
  public testComponent: FuComponent;
}

describe('FuComponent maxSelect is 2.', () => {
  let component:  TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatProgressBarModule, HttpClientTestingModule],
      declarations: [ FuComponent, FuIndicatorComponent, TestHostComponent ],
      providers: [{provide: UploadService, useClass: UploadServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should has default selectorTitle.', () => {
    fixture.detectChanges();
    let dls: DebugElement[];
    dls = fixture.debugElement.queryAll(By.css('a'));
    expect(dls.length).toBe(1);
    expect(dls[0].nativeElement.textContent).toBe('Please Select a File.');
  });

  it('should reflect async upload progress.', fakeAsync(() => {
    let dl: DebugElement;
    let fl: FileList = new FileListMock(new FileMock("a", 55));
    component.testComponent.handleFiles(fl);
    fixture.detectChanges(); // update view with quote
    dl = fixture.debugElement.query(By.css('[ng-reflect-value="50"]'));
    expect(dl.nativeElement).toBeTruthy();
    let dls: DebugElement[] = fixture.debugElement.queryAll(By.css('.childOfOneLine'));
    expect(dls.length).toEqual(2);

    expect(dls[1].nativeElement.textContent).toBe("a");
    expect(component.testComponent.media.length).toEqual(1);

    fl = new FileListMock(new FileMock("a", 50), new FileMock("b", 60));
    component.testComponent.handleFiles(fl);
    fixture.detectChanges(); // update view with quote

    dls = fixture.debugElement.queryAll(By.css('.childOfOneLine'));
    expect(dls.length).toEqual(4);
  }));
});


@Component({
  // tslint:disable-next-line:component-selector
  selector : 'test-host-component',
  template :
  `<div>
    <input #testInput type="text">
    <app-fu maxSelect="1" selectorTitle="hello" (onOneFileUploaded)="testInput.value=$event.attributes.url;ok();"></app-fu>
  </div>`
})
class TestHostSingleMaxSelectComponent {
  @ViewChild(FuComponent) /* using viewChild we get access to the TestComponent which is a child of TestHostComponent */
  public testComponent: FuComponent;
  ok() {
  }
}

describe('FuComponent maxSelect is 1.', () => {
  let component:  TestHostSingleMaxSelectComponent;
  let fixture: ComponentFixture<TestHostSingleMaxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatProgressBarModule, HttpClientTestingModule],
      declarations: [ FuComponent, FuIndicatorComponent, TestHostSingleMaxSelectComponent ],
      providers: [{provide: UploadService, useClass: UploadServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostSingleMaxSelectComponent);
    component = fixture.componentInstance;
    component.testComponent.uploadUrl = "/fileupload";
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should reflect async upload progress.', fakeAsync(() => {
    let dl: DebugElement;
    let fl: FileList = new FileListMock(new FileMock("a", 55));
    component.testComponent.handleFiles(fl);
    fixture.detectChanges(); // update view with quote
    dl = fixture.debugElement.query(By.css('[ng-reflect-value="50"]'));
    expect(dl.nativeElement).toBeTruthy();
    let dls: DebugElement[] = fixture.debugElement.queryAll(By.css('.childOfOneLine'));
    expect(dls.length).toEqual(2);

    expect(dls[1].nativeElement.textContent).toBe("a");
    expect(component.testComponent.media.length).toEqual(1);

    fl = new FileListMock(new FileMock("a", 50), new FileMock("b", 60));
    component.testComponent.handleFiles(fl);
    fixture.detectChanges(); // update view with quote

    dls = fixture.debugElement.queryAll(By.css('.childOfOneLine'));
    expect(dls.length).toEqual(2);

    dl = fixture.debugElement.query(By.css('input'));
    expect(dl.nativeElement.value).toBe('http://localhost:80/uploaded/e42413a752f64421b614102a9f0f1f71.js');

    dl = fixture.debugElement.query(By.css('a'));
    expect(dl.nativeElement.textContent).toBe('hello');
  }));
});
