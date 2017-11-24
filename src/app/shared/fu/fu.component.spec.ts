import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FuComponent } from './fu.component';
import { FuDirective } from '../../fu.directive';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FuIndicatorComponent } from '../fu-indicator/fu-indicator.component';
import { FileListMock } from '../../test/file-list-mock';
import { FileMock } from '../../test/file-mock';
import { UploadService } from '../../upload.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Medium } from '../../dto/medium';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { MEDIA_BY_IDS } from '../../fixtures/mediabyids';

@Injectable()
class UploadServiceMock {
    constructor() {
    }
    upload(file: File, uploadUrl: string): Observable<number | Medium[]> {
      return Observable.create(function subscribe(observer) {
        observer.next(50);
        console.log("in observer.");
        observer.next(MEDIA_BY_IDS.data);
        observer.complete();
      });
    }
  }


fdescribe('FuComponent', () => {
  let component: FuComponent;
  let fixture: ComponentFixture<FuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatProgressBarModule, HttpClientTestingModule],
      declarations: [ FuComponent, FuDirective, FuIndicatorComponent ],
      providers: [{provide: UploadService, useClass: UploadServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuComponent);
    component = fixture.componentInstance;
    component.uploadUrl = "/fileupload";
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    // fl = new FileListMock(new FileMock("a", 55), new FileMock("b", 66));
    // component.handleFiles(fl);
    // fixture.detectChanges();
  });

  it('should reflect async upload progress.', fakeAsync(() => {
    let dl: DebugElement;

    let fl: FileList = new FileListMock(new FileMock("a", 55));
    component.handleFiles(fl);
    fixture.detectChanges(); // update view with quote

    dl = fixture.debugElement.query(By.css('[ng-reflect-value="50"]'));
    expect(dl.nativeElement).toBeTruthy();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    dl = fixture.debugElement.query(By.css('[ng-reflect-value="50"]'));
    expect(dl.nativeElement).toBeTruthy();
    let dls: DebugElement[] = fixture.debugElement.queryAll(By.css('.childOfOneLine'));
    expect(dls.length).toEqual(2);

    expect(dls[1].nativeElement.textContent).toBe("a");
    expect(component.media.length).toEqual(2);
  }));
});