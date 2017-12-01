import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MyNgFirstAppComponent } from './my-ng-first-app';

import { MymModule } from './example/list/mym.module';
import { TopToolbarModule } from './shared/top-toolbar/top-toolbar.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { HttpDatastore } from './services/http-datastore';
import { DatastoreUtilService } from './services/datastore-util.service';
import { HttpDatastoreService } from './services/http-datastore.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MATERIAL_COMPATIBILITY_MODE} from '@angular/material';



// An NgModule is a class adorned with the @NgModule decorator function
// Put AppRoutingModule at the end of imports!!!!!!!!
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MymModule,
    TopToolbarModule,
    FormsModule,
    ManufacturerModule,
    AppRoutingModule
  ],
  declarations: [ MyNgFirstAppComponent,
    PageNotFoundComponent
    ],
  providers: [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}, DatastoreUtilService,
    {provide: HttpDatastore, useClass: HttpDatastoreService}
  ],
  bootstrap: [ MyNgFirstAppComponent ]
})
export class AppModule { }
