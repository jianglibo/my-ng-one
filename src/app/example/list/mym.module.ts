import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class MymModule { }
