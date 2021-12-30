import { TestBed } from '@angular/core/testing';

import { DespachoRepuestosService } from './despacho-repuestos.service';

describe('DespachoRepuestosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DespachoRepuestosService = TestBed.get(DespachoRepuestosService);
    expect(service).toBeTruthy();
  });
});
