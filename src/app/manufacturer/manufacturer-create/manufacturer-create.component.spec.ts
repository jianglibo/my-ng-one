import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
   MatSortModule } from '@angular/material';

describe('ManufacturerCreateComponent', () => {
  let component: ManufacturerCreateComponent;
  let fixture: ComponentFixture<ManufacturerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatListModule, MatTableModule, MatCheckboxModule, BrowserAnimationsModule,
        MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule],
      declarations: [ ManufacturerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
