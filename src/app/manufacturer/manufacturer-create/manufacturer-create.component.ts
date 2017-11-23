import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Manufacturer } from '../../dto/manufacturer';
import { MatChipInputEvent } from '@angular/material';
// import { MdChipInputEvent, ENTER}

const ENTER = 13;
const COMMA = 188;

@Component({
  selector: 'app-manufacturer-create',
  templateUrl: './manufacturer-create.component.html',
  styleUrls: ['./manufacturer-create.component.css']
})
export class ManufacturerCreateComponent implements OnInit {
  manufacturerForm: FormGroup;

  @Input() manufacturer: Manufacturer;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): any {
    this.manufacturerForm = this.fb.group({
      name: '',
      foundTime: '',
      nationality: '',
      legend: '',
      logo: '',
      slogan: '',
      websites: []
    });
  }
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
