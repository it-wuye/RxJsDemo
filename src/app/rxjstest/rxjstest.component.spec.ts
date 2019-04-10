import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjstestComponent } from './rxjstest.component';

describe('RxjstestComponent', () => {
  let component: RxjstestComponent;
  let fixture: ComponentFixture<RxjstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
