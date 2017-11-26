import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Manufacturer } from '../../dto/manufacturer';
import { MatChipInputEvent } from '@angular/material';
import { DtoUtil } from '../../dto-util';
import { ManufacturerService } from '../manufacturer.service';

const ENTER = 13;
const COMMA = 188;

@Component({
  selector: 'app-manufacturer-create',
  templateUrl: './manufacturer-create.component.html',
  styleUrls: ['./manufacturer-create.component.css']
})
export class ManufacturerCreateComponent implements OnInit, OnChanges {
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

  constructor(private manufacturerService: ManufacturerService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['manufacturer'].currentValue);
    if (this.manufacturer) {
      let mo = DtoUtil.cloneAttributes(this.manufacturer.attributes);
      let wspairs: {name: string, url: string}[] = [];
      let wss = this.manufacturer.attributes.websites || {};
      for (const key in wss) {
        if (wss.hasOwnProperty(key)) {
          const element = wss[key];
          wspairs.push({name: key, url: element});
        }
      }

      delete mo.websites;
      // mo['websitepairs'] = wss;
      this.manufacturerForm.reset(mo);
      this.setWebsites(wspairs);
    }
  }

  prepareSaveManufacturer(): any {
    throw new Error("Method not implemented.");
  }

  onSubmit() {
    this.manufacturer = this.prepareSaveManufacturer();
    this.manufacturerService.save(this.manufacturer).subscribe(/* error handling */);
    this.ngOnChanges(null);
  }

  setWebsites(websites: {"name": string, "url": string}[]) {
    const addressFGs = websites.map(ws => this.fb.group(ws));
    const addressFormArray = this.fb.array(addressFGs);
    this.manufacturerForm.setControl('websitepairs', addressFormArray);
  }

  addWebsite() {
    this.websitepairs.push(this.fb.group({name: '', url: ''}));
  }

  get websitepairs(): FormArray {
    return this.manufacturerForm.get('websitepairs') as FormArray;
  }

  createForm(): any {
    this.manufacturerForm = this.fb.group({
      name: '',
      foundTime: '',
      founder: '',
      nationality: '',
      legend: '',
      logo: '',
      slogan: '',
      websitepairs: this.fb.array([])
    });
  }

  ngOnInit() {
    console.log("onInit");
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
