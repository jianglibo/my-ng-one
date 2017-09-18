import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';

// import { HttpClientModule } from '@angular/common/http';

// import 'hammerjs';

// An NgModule is a class adorned with the @NgModule decorator function
@NgModule({
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // MdButtonModule,
    // MdCheckboxModule,
    // Include it under 'imports' in your application module after BrowserModule.
    // Once you import HttpClientModule into your app module, you can inject HttpClient into your components and services.
    // HttpClientModule
    // must include this module.
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
