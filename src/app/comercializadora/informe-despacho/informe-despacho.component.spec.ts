import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeDespachoComponent } from './informe-despacho.component';

describe('InformeDespachoComponent', () => {
  let component: InformeDespachoComponent;
  let fixture: ComponentFixture<InformeDespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeDespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
