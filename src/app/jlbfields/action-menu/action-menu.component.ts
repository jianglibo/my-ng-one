import { Component, OnInit, Input } from '@angular/core';
import { ActionMenuItem } from './action-menu-item';
import { ButtonItem, filterButtons } from './action-menu-util';

// http://materializecss.com/icons.html

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.css']
})
export class ActionMenuComponent implements OnInit {

  @Input()
  hideDisabled: boolean;

  @Input()
  itemSize: string | number;

  @Input()
  menuItems: ActionMenuItem[];

  @Input()
  selectedNumber: number;

  constructor() { }

  ngOnInit() {
  }

  get filteredItems():  ButtonItem[] {
    return filterButtons(this.menuItems, this.itemSize, this.selectedNumber, this.hideDisabled);
  }
}
