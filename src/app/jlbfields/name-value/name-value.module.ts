import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NameValueComponent } from './name-value.component';
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  declarations: [
    NameValueComponent
  ],
  exports: [
    NameValueComponent
  ]
})
export class NameValueModule {
  static forRoot() {
    return {
      ngModule: NameValueModule,
      providers: [ ]
    };
  }
}
