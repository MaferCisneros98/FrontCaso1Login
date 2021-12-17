import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRepuestosComponent } from './crear-repuestos.component';

describe('CrearRepuestosComponent', () => {
  let component: CrearRepuestosComponent;
  let fixture: ComponentFixture<CrearRepuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRepuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
