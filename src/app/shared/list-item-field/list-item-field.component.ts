import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

const ENTER = 13;
const COMMA = 188;

@Component({
  selector: 'app-list-item-field',
  templateUrl: './list-item-field.component.html',
  styleUrls: ['./list-item-field.component.css']
})
export class ListItemFieldComponent implements OnInit {

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
