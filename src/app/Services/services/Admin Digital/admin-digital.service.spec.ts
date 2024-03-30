import { TestBed } from '@angular/core/testing';

import { AdminDigitalService } from './admin-digital.service';

describe('AdminDigitalService', () => {
  let service: AdminDigitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDigitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
