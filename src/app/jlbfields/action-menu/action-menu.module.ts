import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionMenuComponent } from './action-menu.component';
import { MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [ ActionMenuComponent ],
  exports: [ ActionMenuComponent ]
})
export class ActionMenuModule { }
