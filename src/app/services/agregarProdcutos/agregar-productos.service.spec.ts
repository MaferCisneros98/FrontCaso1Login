import { TestBed } from '@angular/core/testing';

import { AgregarProductosService } from './agregar-productos.service';

describe('AgregarProductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgregarProductosService = TestBed.get(AgregarProductosService);
    expect(service).toBeTruthy();
  });
});
