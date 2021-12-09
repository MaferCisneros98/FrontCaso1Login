import { TestBed } from '@angular/core/testing';

import { SolicitudtallerService } from './solicitudtaller.service';

describe('SolicitudtallerService', () => {
  let service: SolicitudtallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudtallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
