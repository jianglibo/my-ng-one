import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionMenuComponent } from './action-menu.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [ ActionMenuComponent ],
  exports: [ ActionMenuComponent ]
})
export class ActionMenuModule { }
