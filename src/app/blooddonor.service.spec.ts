import { TestBed } from '@angular/core/testing';

import { BlooddonorService } from './blooddonor.service';

describe('BlooddonorService', () => {
  let service: BlooddonorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlooddonorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
