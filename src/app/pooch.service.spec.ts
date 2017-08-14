import { TestBed, inject } from '@angular/core/testing';

import { PoochService } from './pooch.service';

describe('PoochService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoochService]
    });
  });

  it('should be created', inject([PoochService], (service: PoochService) => {
    expect(service).toBeTruthy();
  }));
});
