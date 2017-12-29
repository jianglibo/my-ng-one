import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActionMenuItem } from "./action-menu-item";
import { ButtonItem, filterButtons } from "./action-menu-util";
import { unescapeIdentifier } from "@angular/compiler";

// http://materializecss.com/icons.html

@Component({
  selector: "app-action-menu",
  templateUrl: "./action-menu.component.html",
  styleUrls: ["./action-menu.component.css"]
})
export class ActionMenuComponent implements OnInit {
  @Input() hideDisabled: boolean;

  @Input() maxButtons = 10;

  @Input() itemSize: string | number;

  @Input() menuItems: ActionMenuItem[];

  @Input() selectedNumber: number;

  @Output() menuClicked = new EventEmitter<ActionMenuItem>();

  constructor() {}

  ngOnInit() {}

  itemClicked(bi: ButtonItem): void {
    const founded = this.menuItems.find(mi => {
      return bi.id === mi.id;
    });
    if (founded) {
      this.menuClicked.emit(founded);
    }
  }

  get displayedItems(): ButtonItem[] {
    const hi = filterButtons(
      this.menuItems,
      this.itemSize,
      this.selectedNumber,
      this.hideDisabled
    );
    const hif = hi.slice(0, this.maxButtons);
    return hif ? hif : [];
  }

  private get menuItemLength() {
    return this.menuItems ? this.menuItems.length : 0;
  }

  get hiddenItems(): ButtonItem[] {
    const hi = filterButtons(
      this.menuItems,
      this.itemSize,
      this.selectedNumber,
      this.hideDisabled);
    const hif = hi.slice(this.maxButtons, this.menuItemLength);
    return hif ? hif : [];
  }
}
