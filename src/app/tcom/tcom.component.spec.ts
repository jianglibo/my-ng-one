import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcomComponent } from './tcom.component';
import { MymModule } from '../example/mym/mym.module';

describe('TcomComponent', () => {
  let component: TcomComponent;
  let fixture: ComponentFixture<TcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TcomComponent ],
      imports: [MymModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
