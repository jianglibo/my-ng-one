import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NameValueComponent } from "./name-value.component";
import { Component, ViewChild } from "@angular/core";
import { ReactiveFormsModule, FormGroup } from "@angular/forms";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core/src/debug/debug_node";
import { click } from "../../../test/test-util";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "test-host-component",
  template: `<div style="width: 100%;"><app-name-value [nameValuePairs]="[{name: 'a', value: 'b'}]"></app-name-value></div>`
})
class NameValueHostComponent {
  @ViewChild(
    NameValueComponent
  ) /* using viewChild we get access to the TestComponent which is a child of TestHostComponent */
  public nameValueComponent: NameValueComponent;

  constructor() {}
  onSubmit() {}
}

describe("NameValueComponent one nv", () => {
  let component: NameValueHostComponent;
  let fixture: ComponentFixture<NameValueHostComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule
        ],
        declarations: [NameValueComponent, NameValueHostComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NameValueHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    let dls: DebugElement[];
    let dl: DebugElement;
    expect(component).toBeTruthy();
    component.nameValueComponent.nameValuePairs = [
      { name: "aname", value: "avalue" }
    ];
    fixture.detectChanges();
    dls = fixture.debugElement.queryAll(By.css(".nvpair-container"));
    expect(dls.length).toBe(1);

    expect(component.nameValueComponent.finalNameValuePairs.length).toBe(1);

    component.nameValueComponent.setNameValues([
      { name: "a", value: "b" },
      { name: "c", value: "d" }
    ]);
    fixture.detectChanges();
    dls = fixture.debugElement.queryAll(By.css(".nvpair-container"));
    expect(dls.length).toBe(2);

    expect(component.nameValueComponent.finalNameValuePairs.length).toBe(2);

    dl = fixture.debugElement.query(By.css(".add-name-value-btn"));
    expect(dl).toBeTruthy();
    click(dl);
    fixture.detectChanges();

    dls = fixture.debugElement.queryAll(By.css(".nvpair-container"));
    expect(dls.length).toBe(3);
  });
});
