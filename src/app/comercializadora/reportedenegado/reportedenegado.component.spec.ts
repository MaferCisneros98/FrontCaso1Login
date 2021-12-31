import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedenegadoComponent } from './reportedenegado.component';

describe('ReportedenegadoComponent', () => {
  let component: ReportedenegadoComponent;
  let fixture: ComponentFixture<ReportedenegadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedenegadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedenegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
