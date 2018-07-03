import { TestBed, inject } from '@angular/core/testing';

import { MedicineServiceService } from './medicine-service.service';

describe('MedicineServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicineServiceService]
    });
  });

  it('should be created', inject([MedicineServiceService], (service: MedicineServiceService) => {
    expect(service).toBeTruthy();
  }));
});
