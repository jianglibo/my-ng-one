import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListItemFieldComponent } from './list-item-field.component';
import { MatChipsModule, MatIconModule, MatFormFieldModule } from '@angular/material';

describe('ListItemFieldComponent', () => {
  let component: ListItemFieldComponent;
  let fixture: ComponentFixture<ListItemFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatChipsModule, MatIconModule, MatFormFieldModule, BrowserAnimationsModule],
      declarations: [ ListItemFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
