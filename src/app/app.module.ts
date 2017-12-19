import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MyNgFirstAppComponent } from './my-ng-first-app';

import { AppRoutingModule } from './app-routing.module';
import { DatastoreUtil} from 'data-shape-ng';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JlbfieldsModule } from './jlbfields/jlbfields.module';



// An NgModule is a class adorned with the @NgModule decorator function
// Put AppRoutingModule at the end of imports!!!!!!!!
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    JlbfieldsModule
  ],
  declarations: [ MyNgFirstAppComponent,
    ],
  providers: [
  ],
  bootstrap: [ MyNgFirstAppComponent ]
})
export class AppModule { }
