import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FuComponent } from "./fu/fu.component";
import { FuIndicatorComponent } from "./fu-indicator/fu-indicator.component";
import { NameValueComponent } from "./name-value/name-value.component";
import { ListItemFieldComponent } from "./list-item-field/list-item-field.component";
import { ImageSelectorComponent } from "./image-selector/image-selector.component";
import { UploadService } from "./upload.service";
import { FuModule } from "./fu/fu.module";
import { FuIndicatorModule } from "./fu-indicator/fu-indicator.module";
import { ImageSelectorModule } from "./image-selector/image-selector.module";
import { ListItemModule } from "./list-item-field/list-item.module";
import { NameValueModule } from "./name-value/name-value.module";

@NgModule({
  imports: [
    CommonModule,
    FuModule,
    FuIndicatorModule,
    ImageSelectorModule,
    ListItemModule,
    NameValueModule
  ],
  declarations: [
  ],
  exports: [
    FuModule,
    FuIndicatorModule,
    ImageSelectorModule,
    ListItemModule,
    NameValueModule
  ]
})
export class JlbfieldsModule {
  static forRoot() {
    return {
      ngModule: JlbfieldsModule,
      providers: [UploadService]
    };
  }
}
