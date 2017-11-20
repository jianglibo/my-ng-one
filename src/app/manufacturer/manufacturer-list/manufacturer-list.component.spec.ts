import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManufacturerListComponent } from './manufacturer-list.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule,
   MatInputModule,
   MatTableModule,
   MatPaginatorModule,
  MatIconModule, MatListModule, MatCheckboxModule, MatSortModule } from '@angular/material';

import { DataStore, SortPhrase, JsonapiObjectType, FilterPhrase } from '../../services/data-store';
import { HttpDatastoreService } from '../../services/http-datastore.service';
import { HttpDatastore } from '../../services/http-datastore';
import { DatastoreUtilService, PageOffsetLimit, PageCursor,
   PageNumberSize, isPageNumberSize, isPageOffsetLimit } from '../../services/datastore-util.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ManufacturerDatasource } from '../manufacturer-datasource';
import { AttributesBase, JsonapiObject } from '../../dto/jsonapi-object';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ListBody } from '../../dto/list-body';
import { SingleBody } from '../../dto/single-body';
import { MANUFACTURERS_BODY } from '../../fixtures/manufacturergetlist';
import { ManufacturerAttributes } from '../../dto/manufacturer-attributes';
import { Manufacturer } from '../../dto/manufacturer';
import { LoginAttemptAttributes } from '../../dto/login-attempt-attributes';
import { By } from '@angular/platform-browser';
import { ManufacturerService } from '../manufacturer.service';
import { Injectable } from '@angular/core';


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


describe('ManufacturerListComponent', () => {
  let component: ManufacturerListComponent;
  let fixture: ComponentFixture<ManufacturerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatListModule, MatTableModule, MatCheckboxModule,
         MatPaginatorModule, MatSortModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule,
          HttpClientTestingModule],
      providers: [{provide: HttpDatastore, useValue: httpDatastoreServiceStub},
         {provide: ManufacturerService, useClass: ManufacturerServiceMock}],
      declarations: [ ManufacturerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerListComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.mat-paginator-range-label'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(/1\s*\-\s*5.*12/g);
  });

  it('should going to page 2.', async(() => {
    // only after detectChanges(), component's onInit() will be called.
    expect(component.dataSource).toBeUndefined();
    fixture.detectChanges();

    fixture.whenStable().then(() => { // wait for async getQuote
        // expect(component.dataSource).toBeUndefined();
        let de = fixture.debugElement.query(By.css('.mat-paginator-range-label'));
        let el = de.nativeElement;
        expect(el.textContent).toMatch(/1\s*\-\s*5.*12/g);
    });
  }));
});
