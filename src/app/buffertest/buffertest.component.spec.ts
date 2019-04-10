import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffertestComponent } from './buffertest.component';

describe('BuffertestComponent', () => {
  let component: BuffertestComponent;
  let fixture: ComponentFixture<BuffertestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuffertestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
