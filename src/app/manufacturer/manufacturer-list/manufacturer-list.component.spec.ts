import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManufacturerListComponent } from './manufacturer-list.component';
import { MatIconModule, MatListModule, MatCheckboxModule, MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DataStore } from '../../services/data-store';
import { HttpDatastoreService } from '../../http-datastore.service';
import { HttpDatastore } from '../../services/http-datastore';
import {HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DatastoreUtilService } from '../../services/datastore-util.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

fdescribe('ManufacturerListComponent', () => {
  let component: ManufacturerListComponent;
  let fixture: ComponentFixture<ManufacturerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatListModule, MatTableModule, MatCheckboxModule,
         MatPaginatorModule, MatSortModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule,
         HttpClientModule, HttpClientTestingModule],
      providers: [{provide: HttpDatastore, useClass: HttpDatastoreService}, HttpClient, DatastoreUtilService],
      declarations: [ ManufacturerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    console.log('xxxxxxxxxxxxxxxxxxx');
    fixture = TestBed.createComponent(ManufacturerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    console.log('bbbbbbbbbbbbbbb');
    expect(component).toBeTruthy();
  });

});
