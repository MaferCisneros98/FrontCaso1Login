import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciocomercializadoraComponent } from './iniciocomercializadora.component';





describe('VerificacionDocumentosComponent', () => {
  let component: IniciocomercializadoraComponent;
  let fixture: ComponentFixture<IniciocomercializadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciocomercializadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciocomercializadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
