import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivtestComponent } from './divtest.component';

describe('DivtestComponent', () => {
  let component: DivtestComponent;
  let fixture: ComponentFixture<DivtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
