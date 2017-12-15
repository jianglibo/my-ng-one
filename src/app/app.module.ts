import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MyNgFirstAppComponent } from './my-ng-first-app';

import { TopToolbarModule } from './shared/top-toolbar/top-toolbar.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DatastoreUtil} from 'data-shape';
import { HttpDatastoreService } from './services/http-datastore.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpDatastore } from './jsonapi4angular/http-datastore';
import { JlbfieldsModule } from './jlbfields/jlbfields.module';
import { Jsonapi4angularModule } from './jsonapi4angular/jsonapi4angular.module';



// An NgModule is a class adorned with the @NgModule decorator function
// Put AppRoutingModule at the end of imports!!!!!!!!
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TopToolbarModule,
    FormsModule,
    AppRoutingModule,
    JlbfieldsModule,
    Jsonapi4angularModule
  ],
  declarations: [ MyNgFirstAppComponent,
    PageNotFoundComponent
    ],
  providers: [
    {provide: HttpDatastore, useClass: HttpDatastoreService}
  ],
  bootstrap: [ MyNgFirstAppComponent ]
})
export class AppModule { }
