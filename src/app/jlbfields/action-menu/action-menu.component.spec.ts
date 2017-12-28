import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMenuComponent } from './action-menu.component';
import { ActionMenuModule } from './action-menu.module';
import { ActionMenuItem } from './action-menu-item';
import { By } from '@angular/platform-browser';

describe('ActionMenuComponent', () => {
  let component: ActionMenuComponent;
  let fixture: ComponentFixture<ActionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ActionMenuModule ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should manual action-item', () => {
    const ami: ActionMenuItem = new ActionMenuItem("a", "b", "b");
    const f = (a: number) =>  a + 1;
    expect(typeof f).toBe('function');

    function fcf(fInP: Function) {
      return fInP.apply(undefined, [10]);
    }
    expect(fcf(f)).toBe(11);

    let called = false;
    switch (typeof f) {
      case 'function':
        called = true;
        break;
      default:
        break;
    }
    expect(called).toBeTruthy();

    const ar = [1, 2, 3];

    expect(ar.indexOf(10)).toBe(-1);
    expect(ar.indexOf(2)).toBe(1);
    expect(typeof ar).toBe('object');
    expect(ar instanceof Array).toBeTruthy();

    const r = /^\s*(.*?)(\d+)\s*$/;
    let rr = r.exec('=0');
    expect(rr.length).toBe(3);
    expect(rr[1]).toBe("=");
    expect(rr[2]).toBe("0");

    rr = r.exec('<>0');
    expect(rr.length).toBe(3);
    expect(rr[1]).toBe("<>");
    expect(rr[2]).toBe("0");

    rr = r.exec('<>010');
    expect(rr.length).toBe(3);
    expect(rr[1]).toBe("<>");
    expect(rr[2]).toBe("010");

    rr = r.exec('xxx');
    expect(rr).toBeNull();

    let s = '<>';
    let caseCalled = false;
    switch (s) {
      case '=':
      case '<>':
        caseCalled = true;
      break;
      default:
        break;
    }

    expect(caseCalled).toBeTruthy();
  });
});
