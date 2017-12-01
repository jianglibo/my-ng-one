import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { FuComponent } from './fu/fu.component';
import { FuIndicatorComponent } from './fu-indicator/fu-indicator.component';
import { MatProgressBarModule, MatChipsModule } from '@angular/material';
import { NameValueComponent } from './name-value/name-value.component';
import { ListItemFieldComponent } from './list-item-field/list-item-field.component';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  declarations: [
    ImageSelectorComponent,
    FuIndicatorComponent,
    FuComponent,
    NameValueComponent,
    ListItemFieldComponent
  ],
  exports: [
    ImageSelectorComponent,
    FuIndicatorComponent,
    FuComponent,
    NameValueComponent
  ]
})
export class SharedModule { }
