import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MyNgFirstAppComponent } from './my-ng-first-app';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';

// import { HttpClientModule } from '@angular/common/http';

// import 'hammerjs';

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
    // BrowserAnimationsModule,
    // MdButtonModule,
    // MdCheckboxModule,
    // Include it under 'imports' in your application module after BrowserModule.
    // Once you import HttpClientModule into your app module, you can inject HttpClient into your components and services.
    // HttpClientModule
    // must include this module.
  ],
  declarations: [ MyNgFirstAppComponent, PageNotFoundComponent
  ],
  providers: [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
  ],
  bootstrap: [ MyNgFirstAppComponent ]
})
export class AppModule { }
