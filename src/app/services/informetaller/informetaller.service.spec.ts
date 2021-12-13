import { TestBed } from '@angular/core/testing';

import { InformetallerService } from './informetaller.service';

describe('InformetallerService', () => {
  let service: InformetallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformetallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
