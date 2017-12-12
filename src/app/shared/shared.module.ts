import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { FuComponent } from './fu/fu.component';
import { FuIndicatorComponent } from './fu-indicator/fu-indicator.component';
import { MatProgressBarModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { NameValueComponent } from './name-value/name-value.component';
import { ListItemFieldComponent } from './list-item-field/list-item-field.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
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
