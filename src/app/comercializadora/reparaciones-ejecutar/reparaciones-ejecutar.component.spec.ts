import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparacionesEjecutarComponent } from './reparaciones-ejecutar.component';

describe('ReparacionesEjecutarComponent', () => {
  let component: ReparacionesEjecutarComponent;
  let fixture: ComponentFixture<ReparacionesEjecutarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparacionesEjecutarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparacionesEjecutarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
