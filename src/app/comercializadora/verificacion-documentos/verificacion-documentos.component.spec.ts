import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionDocumentosComponent } from './verificacion-documentos.component';

describe('VerificacionDocumentosComponent', () => {
  let component: VerificacionDocumentosComponent;
  let fixture: ComponentFixture<VerificacionDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificacionDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
