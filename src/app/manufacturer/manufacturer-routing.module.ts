import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';

const manufacturerRoutes: Routes = [
  { path: 'manufacturers',  component: ManufacturerListComponent },
  { path: 'manufacturers/:id', component: ManufacturerDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(manufacturerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManufacturerRoutingModule { }
