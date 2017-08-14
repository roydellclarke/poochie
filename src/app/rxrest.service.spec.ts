import { TestBed, inject } from '@angular/core/testing';

import { RxrestService } from './rxrest.service';

describe('RxrestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxrestService]
    });
  });

  it('should be created', inject([RxrestService], (service: RxrestService) => {
    expect(service).toBeTruthy();
  }));
});
