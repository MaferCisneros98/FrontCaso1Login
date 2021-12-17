import { TestBed } from '@angular/core/testing';

import { ReparacionesEjecutarService } from './reparaciones-ejecutar.service';

describe('ReparacionesEjecutarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReparacionesEjecutarService = TestBed.get(ReparacionesEjecutarService);
    expect(service).toBeTruthy();
  });
});
