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
import { ReactiveFormsModule } from '@angular/forms';
import { FuComponent } from '../../shared/fu/fu.component';
import { FuIndicatorComponent } from '../../shared/fu-indicator/fu-indicator.component';
import { MANUFACTURER_BODY } from '../../fixtures/manufacturergetone';
import { MANUFACTURERS_BODY } from '../../fixtures/manufacturergetlist';
import { Component, ViewChild, Injectable } from '@angular/core';
import { Manufacturer } from '../../dto/manufacturer';
import { PageCursor, PageNumberSize, PageOffsetLimit, isPageOffsetLimit } from '../../services/datastore-util.service';
import { SortPhrase, FilterPhrase } from '../../services/data-store';
import { ManufacturerAttributes } from '../../dto/manufacturer-attributes';
import { ListBody } from '../../dto/list-body';
import { Observable } from 'rxjs/Observable';
import { HttpDatastore } from '../../services/http-datastore';
import { ManufacturerDatasource } from '../manufacturer-datasource';
import { ManufacturerService } from '../manufacturer.service';

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
  public testComponent: any;
  public manufacturer: Manufacturer; /* this is the variable which is passed as input to the TestComponent */
}


fdescribe('ManufacturerCreateComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatListModule, MatTableModule, MatCheckboxModule, BrowserAnimationsModule,
        MatPaginatorModule, MatSortModule, MatFormFieldModule,
        MatInputModule, MatOptionModule, MatSelectModule,
      ReactiveFormsModule, MatButtonModule, MatChipsModule, MatProgressBarModule],
      declarations: [TestHostComponent, ManufacturerCreateComponent,
         FuComponent, FuIndicatorComponent ],
      providers: [{provide: HttpDatastore, useValue: httpDatastoreServiceStub},
        {provide: ManufacturerService, useClass: ManufacturerServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize value.', fakeAsync(() => {
    fixture.detectChanges();
    component.manufacturer = MANUFACTURERS_BODY.data[0];
    // console.log(MANUFACTURER_BODY.data);
    fixture.detectChanges();
    tick();
    // component.manufacturer = MANUFACTURERS_BODY.data[1];
    fixture.detectChanges();
  }));
});
