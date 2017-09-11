import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

// Import HttpClientModule from @angular/common/http
import {HttpModule} from '@angular/http';

import 'hammerjs';
import { JsonApiModule } from 'angular2-jsonapi';

// An NgModule is a class adorned with the @NgModule decorator function
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    // Include it under 'imports' in your application module after BrowserModule.
    // Once you import HttpClientModule into your app module, you can inject HttpClient into your components and services.
    HttpModule,
    // must include this module.
    JsonApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
