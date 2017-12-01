import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManufacturerCreateComponent } from './manufacturer-create.component';
import {MatFormFieldModule,
   MatInputModule,
   MatTableModule,
   MatPaginatorModule,
   MatOptionModule,
   MatIconModule,
   MatListModule,
   MatCheckboxModule,
   MatSelectModule,
   MatProgressBarModule,
   MatSortModule, MatButtonModule, MatChipsModule} from '@angular/material';
import { ReactiveFormsModule, FormArray } from '@angular/forms';
import { FuComponent } from '../../shared/fu/fu.component';
import { FuIndicatorComponent } from '../../shared/fu-indicator/fu-indicator.component';
import { MANUFACTURER_BODY } from '../../fixtures/manufacturergetone';
import { MANUFACTURERS_BODY } from '../../fixtures/manufacturergetlist';
import { Component, ViewChild, Injectable, DebugElement } from '@angular/core';
import { Manufacturer } from '../../dto/manufacturer';
import { PageCursor, PageNumberSize, PageOffsetLimit, isPageOffsetLimit } from '../../services/datastore-util.service';
import { SortPhrase, FilterPhrase } from '../../services/data-store';
import { ManufacturerAttributes } from '../../dto/manufacturer-attributes';
import { ListBody } from '../../dto/list-body';
import { Observable } from 'rxjs/Observable';
import { HttpDatastore } from '../../services/http-datastore';
import { ManufacturerDatasource } from '../manufacturer-datasource';
import { ManufacturerService } from '../manufacturer.service';
import { click } from '../../test/test-util';
import { By } from '@angular/platform-browser';
import { FileListMock } from '../../test/file-list-mock';
import { FileMock } from '../../test/file-mock';
import { UploadService } from '../../upload.service';
import { UploadServiceMock } from '../../test/upload-mock-service';
import { ImageSelectorComponent } from '../../shared/image-selector/image-selector.component';
import { NameValueComponent } from '../../shared/name-value/name-value.component';

const URL_IN_FIXTURE = 'http://localhost:80/uploaded/e42413a752f64421b614102a9f0f1f71.js';

class HttpDatastoreServiceStub {
  findAll(jsonapiObjectType: Manufacturer,
     page: PageCursor | PageOffsetLimit | PageNumberSize, sort: SortPhrase[],
      filter: FilterPhrase[], params?: any): Observable<ListBody<ManufacturerAttributes, Manufacturer>> {
        let lb = MANUFACTURERS_BODY as ListBody<ManufacturerAttributes, Manufacturer>;
    console.log(page);
    if (isPageOffsetLimit(page)) {
      lb.data = lb.data.slice(page.offset, page.limit + page.offset);
    }
    return Observable.of(lb);
  }
}

@Injectable()
class ManufacturerServiceMock {
    constructor(private _datastore: HttpDatastore) {
    }
     getDatasource(): ManufacturerDatasource {
       let mfds = new ManufacturerDatasource(this._datastore);
       mfds.resultsLength = 12;
       return mfds;
     }
  }
let httpDatastoreServiceStub = new HttpDatastoreServiceStub();

@Component({
  // tslint:disable-next-line:component-selector
  selector : 'test-host-component',
  template :
  `<div><app-manufacturer-create [manufacturer]="manufacturer"></app-manufacturer-create></div>`
})
class TestHostComponent {
  @ViewChild(ManufacturerCreateComponent) /* using viewChild we get access to the TestComponent which is a child of TestHostComponent */
  public testComponent: ManufacturerCreateComponent;

  public manufacturer: Manufacturer; /* this is the variable which is passed as input to the TestComponent */
}

describe('ManufacturerCreateComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  // let addWebsiteEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatListModule, MatTableModule, MatCheckboxModule, BrowserAnimationsModule,
        MatPaginatorModule, MatSortModule, MatFormFieldModule,
        MatInputModule, MatOptionModule, MatSelectModule,
      ReactiveFormsModule, MatButtonModule, MatChipsModule, MatProgressBarModule],
      declarations: [TestHostComponent, ManufacturerCreateComponent,
         FuComponent, FuIndicatorComponent, ImageSelectorComponent, NameValueComponent ],
      providers: [{provide: HttpDatastore, useValue: httpDatastoreServiceStub},
        {provide: ManufacturerService, useClass: ManufacturerServiceMock}, {provide: UploadService, useClass: UploadServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    // addWebsiteEl   = fixture.debugElement.query(By.css('.addWebsiteBtn')); // find hero
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize value.', fakeAsync(() => {
    let dls: DebugElement[];
    let dl: DebugElement;

    let fc: ManufacturerCreateComponent = component.testComponent;
    fixture.detectChanges();
    component.manufacturer = MANUFACTURER_BODY.data;

    component.manufacturer = MANUFACTURER_BODY.data;
    fixture.detectChanges();
    dls = fixture.debugElement.queryAll(By.css('.nvpair-container'));
    expect(dls.length).toEqual(2);
  }));
});
