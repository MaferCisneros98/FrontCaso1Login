import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteaprobadoComponent } from './reporteaprobado.component';

describe('ReporteaprobadoComponent', () => {
  let component: ReporteaprobadoComponent;
  let fixture: ComponentFixture<ReporteaprobadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteaprobadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteaprobadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
