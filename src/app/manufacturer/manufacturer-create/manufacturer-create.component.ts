import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Manufacturer } from '../../dto/manufacturer';
import { MatChipInputEvent } from '@angular/material';
import { DtoUtil, NameValuePair, toDateInputValue } from '../../util/dto-util';
import { ManufacturerService } from '../manufacturer.service';
import { ManufacturerAttributes } from '../../dto/manufacturer-attributes';

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
    this.manufacturer = new Manufacturer(new ManufacturerAttributes());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['manufacturer'].currentValue);
    if (this.manufacturer) {
      let mo = DtoUtil.cloneAttributes(this.manufacturer.attributes);
      let wspairs: NameValuePair[] = [];
      let wss = this.manufacturer.attributes.websites || {};
      for (const key in wss) {
        if (wss.hasOwnProperty(key)) {
          const element = wss[key];
          wspairs.push({name: key, value: element});
        }
      }
      console.log(this.manufacturer.attributes.foundTime);
      let d: Date = new Date(this.manufacturer.attributes.foundTime as number);
      mo.foundTime = toDateInputValue(d);
      delete mo.websites;
      // mo['websitepairs'] = wss;
      this.manufacturerForm.reset(mo);
      this.setWebsites(wspairs);
    }
  }

  prepareSaveManufacturer(): ManufacturerAttributes {
    const formModel = this.manufacturerForm.value;
      // deep copy of form model lairs
      const websitepairsDeepCopy = formModel.websitepairs.map(
        (nvp: NameValuePair) => Object.assign({}, nvp)
      ).map((nvp) => {
        let o = {};
        o[nvp.name] = nvp.value;
        return o;
      });
      // return new `Hero` object containing a combination of original hero value(s)
      // and deep copies of changed form model values
      const saveManufacturer: ManufacturerAttributes = {
        // addresses: formModel.secretLairs // <-- bad!
        name: formModel.name,
        foundTime: formModel.foundTime,
        founder: formModel.founder,
        nationality: formModel.nationality,
        legend: formModel.legend,
        logo: formModel.logo,
        slogan: formModel.slogan,
        websites: websitepairsDeepCopy as {[key: string]: string}
      };
      return saveManufacturer;
  }

  onSubmit() {
    this.manufacturer.attributes = this.prepareSaveManufacturer();
    this.manufacturerService.save(this.manufacturer).subscribe(/* error handling */);
    this.ngOnChanges(null);
  }

  setWebsites(websites: NameValuePair[]) {
    const addressFGs = websites.map(ws => this.fb.group(ws));
    const addressFormArray = this.fb.array(addressFGs);
    this.manufacturerForm.setControl('websitepairs', addressFormArray);
  }

  addWebsite() {
    console.log('ws');
    this.websitepairs.push(this.fb.group({name: '', value: ''}));
  }

  get websitepairs(): FormArray {
    return this.manufacturerForm.get('websitepairs') as FormArray;
  }

  createForm(): any {
    this.manufacturerForm = this.fb.group({
      name: '',
      foundTime: null,
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
