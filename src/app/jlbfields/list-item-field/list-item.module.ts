import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListItemFieldComponent } from "./list-item-field.component";
import {
  MatChipsModule,
  MatIconModule,
  MatFormFieldModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  declarations: [ListItemFieldComponent],
  exports: [ListItemFieldComponent]
})
export class ListItemModule {
  static forRoot() {
    return {
      ngModule: ListItemModule,
      providers: []
    };
  }
}
