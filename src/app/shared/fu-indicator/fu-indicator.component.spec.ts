import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuIndicatorComponent } from './fu-indicator.component';

describe('FuIndicatorComponent', () => {
  let component: FuIndicatorComponent;
  let fixture: ComponentFixture<FuIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
