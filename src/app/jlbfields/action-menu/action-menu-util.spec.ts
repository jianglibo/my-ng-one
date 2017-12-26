import { ActionMenuItem } from './action-menu-item';
import { filterButtons, ButtonItem } from './action-menu-util';

fdescribe('ActionMenuUtil', () => {

  it('should react to delete item correctly.', () => {
    const ai = ActionMenuItem.getDeleteItem();

    let btns = filterButtons([ai], 24, 1, false);
    expect(btns.length).toBe(1);
    expect(btns[0].disabled).toBeFalsy("selection number is 1, delete button should not disabled.");

    btns = filterButtons([ai], 24, 0, false);
    expect(btns.length).toBe(1);
    expect(btns[0].disabled).toBeTruthy("selection number is 0, delete button should disabled.");

    expect(btns[0].size).toBe(24);

    btns = filterButtons([ai], 24, 0, true);
    expect(btns.length).toBe(0, "selection number is 0,delete button should disabled. and hideDisabled is true, should return no item.");
  });

  it('should react to edit item correctly.', () => {
    const ai = ActionMenuItem.getEditItem();

    let btns = filterButtons([ai], 24, 1, false);
    expect(btns.length).toBe(1);
    expect(btns[0].disabled).toBeFalsy("selection number is 1, edit button should not disabled.");

    btns = filterButtons([ai], 24, 2, false);
    expect(btns.length).toBe(1);
    expect(btns[0].disabled).toBeTruthy("selection number is 2, edit button should disabled.");

    btns = filterButtons([ai], 24, 0, false);
    expect(btns.length).toBe(1);
    expect(btns[0].disabled).toBeTruthy("selection number is 0, edit button should disabled.");

    btns = filterButtons([ai], 24, 0, true);
    expect(btns.length).toBe(0, "selection number is 0, button should disabled. and hideDisabled is true, should return no item.");
  });
});
