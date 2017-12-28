import { ActionMenuItem } from "./action-menu-item";
import { MatChipInputEvent } from '@angular/material';
import { SwitchView } from "@angular/common/src/directives/ng_switch";

export class ButtonItem {
  constructor(
    public id: string,
    public iconName: string,
    public disabled: boolean,
    public size: number | string,
    public labelName: string
  ) {}
}

interface Mt {
  opt: string;
  num: number;
}

function matchRegexp(stateString: string): Mt {
  const r = /^\s*(.*?)(\d+)\s*$/;
  let rr = r.exec(stateString);
  if (rr) {
    return {opt: rr[1], num: +rr[2]};
  } else {
    return {opt: "", num: 0};
  }
}

function needDisabled(stateString: string, selectionNumber: number): boolean {
  const mt = matchRegexp(stateString);
  switch (mt.opt) {
    case "==":
      if (mt.num === selectionNumber) {
        return true;
      }
      break;
    case ">=":
    case "=>":
      if (mt.num >= selectionNumber) {
        return true;
      }
      break;
    case "<=":
    case "=<":
      if (mt.num <= selectionNumber) {
        return true;
      }
      break;
    case "<>":
    case "><":
    case "!==":
    case "!=":
      if (mt.num !== selectionNumber) {
        return true;
      }
      break;
    default:
      break;
  }
  return false;
}

export function filterButtons(
  menuItems: ActionMenuItem[],
  size: string | number,
  selectionNumber: number,
  hideDisabled: boolean
): ButtonItem[] {
  let items: ButtonItem[];
  if (menuItems) {
    return menuItems.map(itm => {
      let bDisable = false;
      const cnds = itm.condition;
      if (cnds) {
        if (cnds instanceof Array) {
          for (let i = 0; i < cnds.length; i++) {
            const sv = cnds[i];
            switch (typeof sv) {
              case "function":
                bDisable = (<Function>sv).call(undefined, selectionNumber);
                break;
              case "string":
                bDisable = needDisabled(sv, selectionNumber);
                break;
              default:
                break;
            }
            if (bDisable) {
              break;
            }
          }
        }
      }
      if (bDisable && hideDisabled) {
        return undefined;
      } else {
        return new ButtonItem(itm.id, itm.iconName, bDisable, size, itm.labelName);
      }
    }).filter(btn => btn);
  } else {
    return [];
  }
}
