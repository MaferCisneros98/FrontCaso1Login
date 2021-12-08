import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarReclamoComponent } from './generar-reclamo.component';

describe('GenerarReclamoComponent', () => {
  let component: GenerarReclamoComponent;
  let fixture: ComponentFixture<GenerarReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
