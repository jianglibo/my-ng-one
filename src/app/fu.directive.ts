import { Directive, ElementRef, HostListener, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[appFu]'
})
export class FuDirective {

  @Output() onFileSelected = new EventEmitter<File>();

  constructor(private el: ElementRef) {
  }

   @HostListener('change')
   onSelectChange() {
    let files: FileList = this.el.nativeElement.files;
    if (files && files.length > 0) {
      this.onFileSelected.emit(files.item(0));
    }
   }
}
