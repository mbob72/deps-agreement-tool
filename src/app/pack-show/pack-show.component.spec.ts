import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackShowComponent } from './pack-show.component';

describe('PackShowComponent', () => {
  let component: PackShowComponent;
  let fixture: ComponentFixture<PackShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
