import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComercializadoraAceptacionComponent } from './comercializadora-aceptacion.component';

describe('VerificacionDocumentosComponent', () => {
  let component: ComercializadoraAceptacionComponent;
  let fixture: ComponentFixture<ComercializadoraAceptacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercializadoraAceptacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercializadoraAceptacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
