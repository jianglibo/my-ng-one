import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageSelectorComponent } from './image-selector.component';
import { FuModule } from '../fu/fu.module';

@NgModule({
  imports: [CommonModule, FuModule],
  declarations: [
    ImageSelectorComponent
  ],
  exports: [
    ImageSelectorComponent
  ]
})
export class ImageSelectorModule {
  static forRoot() {
    return {
      ngModule: ImageSelectorModule,
      providers: []
    };
  }
}
