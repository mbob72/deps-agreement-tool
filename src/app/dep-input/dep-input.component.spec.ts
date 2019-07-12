import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepInputComponent } from './dep-input.component';

describe('DepInputComponent', () => {
  let component: DepInputComponent;
  let fixture: ComponentFixture<DepInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
