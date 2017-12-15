import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FuComponent } from "./fu/fu.component";
import { FuIndicatorComponent } from "./fu-indicator/fu-indicator.component";
import { NameValueComponent } from "./name-value/name-value.component";
import { ListItemFieldComponent } from "./list-item-field/list-item-field.component";
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { UploadService } from './upload.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FuComponent,
    FuIndicatorComponent,
    NameValueComponent,
    ListItemFieldComponent,
    ImageSelectorComponent
  ],
  exports: [
    FuComponent,
    FuIndicatorComponent,
    NameValueComponent,
    ListItemFieldComponent,
    ImageSelectorComponent
  ]
})
export class JlbfieldsModule {
  static forRoot() {
    return {
      ngModule: JlbfieldsModule,
      providers: [ UploadService ]
    };
  }
}
