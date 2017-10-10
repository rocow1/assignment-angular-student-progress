import { TestBed, inject } from '@angular/core/testing';

import { CalculateAssignmentsService } from './calculate-assignments.service';

describe('CalculateAssignmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateAssignmentsService]
    });
  });

  it('should be created', inject([CalculateAssignmentsService], (service: CalculateAssignmentsService) => {
    expect(service).toBeTruthy();
  }));
});
