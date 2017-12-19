import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FuComponent } from './fu.component';
import { FuIndicatorModule } from '../fu-indicator/fu-indicator.module';

@NgModule({
  imports: [CommonModule, FuIndicatorModule],
  declarations: [
    FuComponent
  ],
  exports: [
    FuComponent
  ]
})
export class FuModule {
  static forRoot() {
    return {
      ngModule: FuModule,
      providers: [ ]
    };
  }
}
