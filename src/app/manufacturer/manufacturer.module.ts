import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';

import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { MatIconModule, MatListModule, MatCheckboxModule, MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ManufacturerService } from './manufacturer.service';


@NgModule({
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ManufacturerDetailComponent,
    ManufacturerListComponent
  ],
  providers: [ ManufacturerService ],
  exports: [ManufacturerDetailComponent, ManufacturerListComponent]
})
export class ManufacturerModule { }
