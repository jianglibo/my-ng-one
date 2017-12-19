import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FuIndicatorComponent } from './fu-indicator.component';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatProgressBarModule],
  declarations: [
    FuIndicatorComponent
  ],
  exports: [
    FuIndicatorComponent
  ]
})
export class FuIndicatorModule {
  static forRoot() {
    return {
      ngModule: FuIndicatorModule,
      providers: []
    };
  }
}
