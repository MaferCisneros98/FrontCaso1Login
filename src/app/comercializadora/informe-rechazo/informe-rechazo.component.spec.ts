import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeRechazoComponent } from './informe-rechazo.component';

describe('InformeRechazoComponent', () => {
  let component: InformeRechazoComponent;
  let fixture: ComponentFixture<InformeRechazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeRechazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeRechazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
