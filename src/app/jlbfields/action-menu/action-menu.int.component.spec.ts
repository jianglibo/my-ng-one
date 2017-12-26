import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from "@angular/core/testing";

import { Injectable, Component, ViewChild } from "@angular/core";

import { MEDIA_BY_IDS, Medium } from "data-shape-ng";

import { ActionMenuComponent } from "./action-menu.component";
import { ActionMenuModule } from "./action-menu.module";
import { ActionMenuItem } from "./action-menu-item";
import { By } from '@angular/platform-browser';

/* It's not possible to stub the component's HeroDetailService in the providers of the TestBed.configureTestingModule.
 Those are providers for the testing module, not the component. They prepare the dependency injector at the fixture level.
*/

/* Angular creates the component with its own injector, which is a child of the fixture injector.
  It registers the component's providers (the HeroDetailService in this case) with the child injector.
 A test cannot get to child injector services from the fixture injector.
 And TestBed.configureTestingModule can't configure them either.*/

// Angular has been creating new instances of the real HeroDetailService all along!

@Component({
  // tslint:disable-next-line:component-selector
  selector: "test-host-component",
  template: `<div><app-action-menu [hideDisabled]="hideDisabledMenuItem"
   [menuItems]="menuItems" [itemSize]="itemSize" [selectedNumber]="selectedNumber"></app-action-menu></div>`
})
class ActionMenuHostComponent {
  @ViewChild(
    ActionMenuComponent
  ) /* using viewChild we get access to the TestComponent which is a child of TestHostComponent */
  public actionMenuComponent: ActionMenuComponent;

  hideDisabledMenuItem: boolean;
  menuItems: ActionMenuItem[];
  itemSize: number | string;
  selectedNumber: number | string;
}
describe("ActionMenu integration", () => {
  let component: ActionMenuHostComponent;
  let fixture: ComponentFixture<ActionMenuHostComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ActionMenuModule],
        declarations: [ActionMenuHostComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMenuHostComponent);
    component = fixture.componentInstance;
    expect(component.itemSize).toBeUndefined("wrapper component's itemSize should not be initialized.");
    expect(component.selectedNumber).toBeUndefined("wrapper component's selectedNumber should not be initialized.");
  });

  it("should create 2 buttons,among them, none is disabled.", () => {
    component.menuItems = [
      ActionMenuItem.getDeleteItem(),
      ActionMenuItem.getEditItem()
    ];
    component.itemSize = 36;
    component.selectedNumber = 1;
    fixture.detectChanges();
    const bitems = component.actionMenuComponent.filteredItems;
    let ses = fixture.debugElement.queryAll(By.css('.md-36'));
    expect(ses.length).toBe(2);
    ses = fixture.debugElement.queryAll(By.css(":disabled"));
    expect(ses.length).toBe(0);
  });

  it("should create 2 buttons,among them, one is disabled.", () => {
    component.menuItems = [
      ActionMenuItem.getDeleteItem(),
      ActionMenuItem.getEditItem()
    ];
    component.itemSize = 36;
    component.selectedNumber = 2;
    fixture.detectChanges();
    const bitems = component.actionMenuComponent.filteredItems;
    let ses = fixture.debugElement.queryAll(By.css('.md-36'));
    expect(ses.length).toBe(2);
    ses = fixture.debugElement.queryAll(By.css(":disabled"));
    expect(ses.length).toBe(1);
  });
  it("should create 1 buttons", () => {
    component.menuItems = [
      ActionMenuItem.getDeleteItem(),
      ActionMenuItem.getEditItem()
    ];
    component.itemSize = 36;
    component.selectedNumber = 2;
    component.hideDisabledMenuItem = true;
    fixture.detectChanges();
    const bitems = component.actionMenuComponent.filteredItems;
    let ses = fixture.debugElement.queryAll(By.css('.md-36'));
    expect(ses.length).toBe(1);
    ses = fixture.debugElement.queryAll(By.css(":disabled"));
    expect(ses.length).toBe(0);
  });
});
