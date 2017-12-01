import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Medium } from '../../dto/medium';
import { FuComponent } from '../fu/fu.component';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {

  @Input()
  medium: Medium;

  @Input()
  noImgTitle = 'No Image Selected.';

  @Input()
  selectorTitle = 'Please Select an Image File.';

  @ViewChild(FuComponent)
  fuComponent: FuComponent;

  imgUrl: string;

  constructor() { }

  ngOnInit() {
  }

  onImgUploaded(medium: Medium) {
    console.log(medium);
    this.medium = medium;
    this.imgUrl = medium.attributes.url;
  }
}
