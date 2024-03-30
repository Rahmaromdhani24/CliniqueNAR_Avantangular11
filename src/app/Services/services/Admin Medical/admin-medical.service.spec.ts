import { TestBed } from '@angular/core/testing';

import { AdminMedicalService } from './admin-medical.service';

describe('AdminMedicalService', () => {
  let service: AdminMedicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMedicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
