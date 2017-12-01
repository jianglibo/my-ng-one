import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { NameValuePair } from '../../util/dto-util';

/**
 * the nameValuePairs value will not change after initialization.
 * Maybe it's better to set the value programly instead of property setting.
 */

@Component({
  selector: 'app-name-value',
  templateUrl: './name-value.component.html',
  styleUrls: ['./name-value.component.css']
})
export class NameValueComponent implements OnInit, OnChanges {

  // only used as a setter.
  @Input()
  nameValuePairs: NameValuePair[];

  myGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.myGroup = this.fb.group({
      nvFormArray: this.fb.array([])
    });
  }

  get nvFormArray(): FormArray {
    return this.myGroup.get('nvFormArray') as FormArray;
  }

  // when user clicked add button, form model will change, but data model keep untouched.
  addNameValue() {
    this.nvFormArray.push(this.fb.group({name: '', value: ''}));
  }

  setNameValues(nameValues: NameValuePair[]) {
    const nvFGs = nameValues.map(nv => this.fb.group(nv));
    const nvFormArray = this.fb.array(nvFGs);
    this.myGroup.setControl('nvFormArray', nvFormArray);
  }

  get finalNameValuePairs(): NameValuePair[] {
    const formModel = this.myGroup.value;
    const deepCopy = formModel.nvFormArray.map(
      (nvp: NameValuePair) => Object.assign({}, nvp)
    );
    return deepCopy;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setNameValues(this.nameValuePairs);
  }
}
