import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Manufacturer } from '../../dto/manufacturer';
import { MatChipInputEvent } from '@angular/material';
import { DtoUtil, NameValuePair, toDateInputValue } from '../../util/dto-util';
import { ManufacturerService } from '../manufacturer.service';
import { ManufacturerAttributes } from '../../dto/manufacturer-attributes';
import { Medium } from '../../dto/medium';
import { FuComponent } from '../../shared/fu/fu.component';
import { ImageSelectorComponent } from '../../shared/image-selector/image-selector.component';
import { NameValueComponent } from '../../shared/name-value/name-value.component';


@Component({
  selector: 'app-manufacturer-create',
  templateUrl: './manufacturer-create.component.html',
  styleUrls: ['./manufacturer-create.component.css']
})
export class ManufacturerCreateComponent implements OnInit, OnChanges {
  manufacturerForm: FormGroup;

  @Input() manufacturer: Manufacturer;

  @ViewChild(ImageSelectorComponent)
  imageSelector: ImageSelectorComponent;

  @ViewChild(NameValueComponent)
  nameValues: NameValueComponent;

  websites: NameValuePair[] = [];



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
      this.manufacturerForm.reset(mo);
      // this.setWebsites(wspairs);
      this.imageSelector.imgUrl = mo.logo;
      this.setWebsites(this.manufacturer.attributes.websites);
    }
  }

  setWebsites(m: {[key: string]: string}): void {
    const nameValuePairs = [];
    if (m) {
      for (const key in m) {
        if (m.hasOwnProperty(key)) {
          nameValuePairs.push({name: key, value: m[key]});
        }
      }
    }
    this.websites =  nameValuePairs;
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
        logo: this.imageSelector.imgUrl,
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

  // setWebsites(websites: NameValuePair[]) {
  //   const addressFGs = websites.map(ws => this.fb.group(ws));
  //   const addressFormArray = this.fb.array(addressFGs);
  //   this.manufacturerForm.setControl('websitepairs', addressFormArray);
  // }

  // addWebsite() {
  //   console.log('ws');
  //   this.websitepairs.push(this.fb.group({name: '', value: ''}));
  // }

  // get websitepairs(): FormArray {
  //   return this.manufacturerForm.get('websitepairs') as FormArray;
  // }

  createForm(): any {
    this.manufacturerForm = this.fb.group({
      name: '',
      foundTime: null,
      founder: '',
      nationality: '',
      legend: '',
      logo: new FormControl({value: 'n/a', disabled: true}, Validators.required),
      slogan: '',
      websitepairs: this.fb.array([])
    });
  }

  ngOnInit() {
    console.log("onInit");
  }
}
