import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBottomDropmenuComponent } from './main-bottom-dropmenu.component';

describe('MainBottomDropmenuComponent', () => {
  let component: MainBottomDropmenuComponent;
  let fixture: ComponentFixture<MainBottomDropmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBottomDropmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBottomDropmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
