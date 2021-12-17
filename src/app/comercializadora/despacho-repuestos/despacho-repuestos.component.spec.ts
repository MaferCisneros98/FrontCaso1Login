import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachoRepuestosComponent } from './despacho-repuestos.component';

describe('DespachoRepuestosComponent', () => {
  let component: DespachoRepuestosComponent;
  let fixture: ComponentFixture<DespachoRepuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespachoRepuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespachoRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
