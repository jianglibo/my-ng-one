import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule, MatSelectModule,
  MatInputModule, MatPaginatorModule,
  MatIconModule, MatListModule,
  MatCheckboxModule, MatSortModule,
  MatTableModule, MatOptionModule,
  MatButtonModule, MatChipsModule} from '@angular/material';

import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';

import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerCreateComponent } from './manufacturer-create/manufacturer-create.component';
import { ManufacturerEditComponent } from './manufacturer-edit/manufacturer-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    MatOptionModule,
    MatButtonModule,
    MatChipsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ManufacturerDetailComponent,
    ManufacturerListComponent,
    ManufacturerCreateComponent,
    ManufacturerEditComponent
  ],
  providers: [ ManufacturerService ],
  exports: [ManufacturerDetailComponent,
    ManufacturerListComponent,
  ManufacturerCreateComponent,
  ManufacturerEditComponent ]
})
export class ManufacturerModule { }
