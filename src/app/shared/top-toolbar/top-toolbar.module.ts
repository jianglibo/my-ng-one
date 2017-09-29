import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { TopToolbarComponent } from './top-toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [ TopToolbarComponent ],
  exports: [ TopToolbarComponent ]
})
export class TopToolbarModule { }
