import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MyNgFirstAppComponent } from './my-ng-first-app';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

import { MymModule } from './example/list/mym.module';
import { TopToolbarModule } from './shared/top-toolbar/top-toolbar.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { ManufacturerModule } from './manufacturer/manufacturer.module';


// An NgModule is a class adorned with the @NgModule decorator function
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MymModule,
    TopToolbarModule,
    ManufacturerModule,
    AppRoutingModule
  ],
  declarations: [ MyNgFirstAppComponent, PageNotFoundComponent
  ],
  providers: [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
  ],
  bootstrap: [ MyNgFirstAppComponent ]
})
export class AppModule { }
