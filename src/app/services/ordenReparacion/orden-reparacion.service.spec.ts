import { TestBed } from '@angular/core/testing';

import { OrdenReparacionService } from './orden-reparacion.service';

describe('OrdenReparacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenReparacionService = TestBed.get(OrdenReparacionService);
    expect(service).toBeTruthy();
  });
});
