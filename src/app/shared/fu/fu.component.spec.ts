import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FuComponent } from './fu.component';
import { FuDirective } from '../../fu.directive';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FuIndicatorComponent } from '../fu-indicator/fu-indicator.component';
import { FileListMock } from '../../test/file-list-mock';
import { FileMock } from '../../test/file-mock';

fdescribe('FuComponent', () => {
  let component: FuComponent;
  let fixture: ComponentFixture<FuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatProgressBarModule, HttpClientTestingModule],
      declarations: [ FuComponent, FuDirective, FuIndicatorComponent ]
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
    let fl: FileList = new FileListMock(new FileMock("a", 55));
    component.handleFiles(fl);
    fixture.detectChanges();
    fl = new FileListMock(new FileMock("a", 55), new FileMock("b", 66));
    component.handleFiles(fl);
    fixture.detectChanges();
  });
});
