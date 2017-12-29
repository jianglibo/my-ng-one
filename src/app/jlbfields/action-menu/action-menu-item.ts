export class ActionMenuItem {
  condition: any[];

  constructor(public id: string, public iconName: string, public labelName: string) {}

  static getDeleteItem(): ActionMenuItem {
    const m = new ActionMenuItem("delete", "delete", "delete");
    m.condition = [ActionMenuItem.deleteStateFunction];
    return m;
  }

  static getEditItem(): ActionMenuItem {
    const m = new ActionMenuItem("edit", "edit", "edit");
    m.condition = [ActionMenuItem.editStateFunction];
    return m;
  }

  static getCreateItem(): ActionMenuItem {
    const m = new ActionMenuItem("create", "create", "create");
    m.condition = [];
    return m;
  }

  static deleteStateFunction = (n: number) => {
    if (n === 0) {
      return true;
    } else {
      return false;
    }
  }

  static editStateFunction = (n: number) => {
    if (n === 1) {
      return false;
    } else {
      return true;
    }
  }
}
