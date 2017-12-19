import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UploadService } from './upload.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class JlbfieldsServiceModule {
  static forRoot() {
    return {
      ngModule: JlbfieldsServiceModule,
      providers: [UploadService]
    };
  }
}
