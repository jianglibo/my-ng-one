import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TopComponent } from './topcom';

import { MymModule } from './example/mym/mym.module';
import { TopToolbarModule } from './shared/top-toolbar/top-toolbar.module';


// describe('Topcom should work.', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       // imports: [ Topcom ],
//       declarations: [ TopComponent ]
//     }).compileComponents();
//   }));

//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(TopComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));

//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(TopComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('My First Angular App');
//   }));

//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(TopComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to My First Angular App!');
//   }));
// });

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopComponent],
      imports: [MymModule, TopToolbarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
/*
  it(`should have as title 'app'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My First Angular App');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to My First Angular App!');
  }));
*/
});
