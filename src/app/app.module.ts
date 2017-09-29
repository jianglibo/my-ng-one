import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TopComponent } from './topcom';
import { TcomComponent } from './tcom/tcom.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';

// import { HttpClientModule } from '@angular/common/http';

// import 'hammerjs';

import { MymModule } from './example/mym/mym.module';
import { TopToolbarModule } from './shared/top-toolbar/top-toolbar.module';

// An NgModule is a class adorned with the @NgModule decorator function
@NgModule({
  imports: [
    BrowserModule,
    MymModule,
    TopToolbarModule
    // BrowserAnimationsModule,
    // MdButtonModule,
    // MdCheckboxModule,
    // Include it under 'imports' in your application module after BrowserModule.
    // Once you import HttpClientModule into your app module, you can inject HttpClient into your components and services.
    // HttpClientModule
    // must include this module.
  ],
  declarations: [ TopComponent, TcomComponent],
  providers: [],
  bootstrap: [ TopComponent ]
})
export class AppModule { }
