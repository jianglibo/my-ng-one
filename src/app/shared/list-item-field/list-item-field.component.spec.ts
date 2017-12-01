import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemFieldComponent } from './list-item-field.component';

fdescribe('ListItemFieldComponent', () => {
  let component: ListItemFieldComponent;
  let fixture: ComponentFixture<ListItemFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
