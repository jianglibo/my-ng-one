import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed,
  tick
} from "@angular/core/testing";

import { Injectable, Component, ViewChild } from "@angular/core";

import { MEDIA_BY_IDS, Medium } from "data-shape-ng";

import { ActionMenuComponent } from "./action-menu.component";
import { ActionMenuModule } from "./action-menu.module";
import { ActionMenuItem } from './action-menu-item';
import { By } from '@angular/platform-browser';
import { click } from "../test-util";
import { fakeAsync } from '@angular/core/testing';

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
  template: `<div><app-action-menu [hideDisabled]="hideDisabledMenuItem" (menuClicked)="menuClicked($event)"
   [menuItems]="menuItems" [itemSize]="itemSize" [selectedNumber]="selectedNumber" [maxButtons]="maxButtons"></app-action-menu></div>`
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

  clickedMenuItem: ActionMenuItem;

  maxButtons: number;

  menuClicked(am: ActionMenuItem) {
    this.clickedMenuItem = am;
  }
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

  it("should slice an array.", () => {
    const a = [1, 2, 3];
    expect(a.slice(0, 1).length).toBe(1);
    expect(a.slice(0, 10).length).toBe(3);
    expect(a.slice(0, 3).length).toBe(3);
    expect(a.slice(10, 12).length).toBe(0);
  });

  it("should create 2 buttons,among them, none is disabled.", () => {
    component.menuItems = [
      ActionMenuItem.getDeleteItem(),
      ActionMenuItem.getEditItem()
    ];
    component.itemSize = 36;
    component.selectedNumber = 1;
    fixture.detectChanges();
    const bitems = component.actionMenuComponent.displayedItems;
    let ses = fixture.debugElement.queryAll(By.css('.mat-36'));
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
    const bitems = component.actionMenuComponent.displayedItems;
    let ses = fixture.debugElement.queryAll(By.css('.mat-36'));
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
    const bitems = component.actionMenuComponent.displayedItems;
    let ses = fixture.debugElement.queryAll(By.css('.mat-36'));
    expect(ses.length).toBe(1, "should contain one mat-36 button.");
    ses = fixture.debugElement.queryAll(By.css(":disabled"));
    expect(ses.length).toBe(0, "should have no button disabled.");
  });

  it("should show menu switch button.", () => {
    component.menuItems = [
      ActionMenuItem.getDeleteItem(),
      ActionMenuItem.getEditItem()
    ];
    component.itemSize = 36;
    component.selectedNumber = 1; // should display 2 items. one disabled.
    component.hideDisabledMenuItem = true;
    component.maxButtons = 1;
    fixture.detectChanges();

    expect(component.actionMenuComponent.maxButtons).toBe(1, "maxButtons should be 1.");
    expect(component.actionMenuComponent.displayedItems.length).toBe(1, "displayedItems number should be 1.");
    expect(component.actionMenuComponent.hiddenItems.length).toBe(1, "hiddenItems number should be 1.");

  });

  it("should call itemClicked method when clicked.",  fakeAsync(() => {
    const ai1 = ActionMenuItem.getDeleteItem();
    component.menuItems = [
      ai1,
      ActionMenuItem.getEditItem()
    ];
    component.itemSize = 36;
    component.selectedNumber = 2;
    component.hideDisabledMenuItem = true;
    fixture.detectChanges();

    spyOn(component.actionMenuComponent, "itemClicked").and.callThrough();
    spyOn(component, "menuClicked").and.callThrough();

    let btn = fixture.debugElement.query(By.css('button'));

    component.actionMenuComponent.menuClicked.subscribe((mi) => {
      expect(mi).toBe(ai1);
    });

    click(btn);
    expect(component.actionMenuComponent.itemClicked).toHaveBeenCalledWith(component.actionMenuComponent.displayedItems[0]);

    tick();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    expect(component.menuClicked).toHaveBeenCalledWith(ai1);
    tick();
  }));

});
