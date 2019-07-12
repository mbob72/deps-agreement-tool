import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAppDepsComponent } from './one-app-deps.component';

describe('OneAppDepsComponent', () => {
  let component: OneAppDepsComponent;
  let fixture: ComponentFixture<OneAppDepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneAppDepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAppDepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
