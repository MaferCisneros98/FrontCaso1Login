import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesgarantiaestadoComponent } from './reportesgarantiaestado.component';

describe('ReportesgarantiaestadoComponent', () => {
  let component: ReportesgarantiaestadoComponent;
  let fixture: ComponentFixture<ReportesgarantiaestadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesgarantiaestadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesgarantiaestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
