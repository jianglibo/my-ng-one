import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MyNgFirstAppComponent } from './my-ng-first-app';

import { MymModule } from './example/list/mym.module';
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
  let component: MyNgFirstAppComponent;
  let fixture: ComponentFixture<MyNgFirstAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgFirstAppComponent ],
      imports: [MymModule, TopToolbarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgFirstAppComponent);
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
